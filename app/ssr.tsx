import { renderToString } from 'react-dom/server'
import * as zlib from "zlib"

import { SSRApp } from './src/SSRApp'
// @ts-ignore
import indexFile from './build-prod/index.html';

const gzip = (html: string) => new Promise((response, reject) => {
  const input = Buffer.from(html)

  zlib.deflate(input, (error, result) => {
    if (error) {
      return reject(error)
    }

    return response(result.toString())
  })
})

const getData = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
}
const getHtml = async (url: string, compress: boolean): Promise<string> => {
  const data = await getData()

  const app = renderToString(<SSRApp url={url} data={data} />)

  const html = indexFile
      .replace('<div id="root"></div>',`<div id="root">${app}</div>`)
      .replace('<scirpt></scirpt>', '<script type="text/javascript">window.__data = JSON.parse(`' + JSON.stringify(data) + '`);</script>')

  return compress ? gzip(html) : html
}

export const edgeLambdaHandler = async (event: { Records: [{ cf: { request: { uri: string }}}] }) => {
  try {
    const request = event.Records[0].cf.request;

    const body = await getHtml(request.uri, true)

    return {
      status: "200",
      statusDescription: "OK",
      bodyEncoding: "base64",
      headers: {
        "cache-control": [
          {
            key: "Cache-Control",
            value: "max-age=100",
          },
        ],
        "content-type": [
          {
            key: "Content-Type",
            value: "text/html",
          },
        ],
        "content-encoding": [
          {
            key: 'Content-Encoding',
            value: 'deflate'
          }
        ]
      },
      body,
    }
  } catch (error) {
    console.log(`Error ${(error as Error)?.message}`);
    return `Error ${error}`;
  }
};

export const apiGatewayHandler = async (event: { path: string }) => {
  try {
    const body = await getHtml(event.path, false)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body,
    }
  } catch (e) {
    console.log('getHtml error: ', e)
  }
}
