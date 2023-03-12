import { renderToString } from 'react-dom/server'
import { SSRApp } from './src/SSRApp'
import indexFile from './dist/index.html'
const getData = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
}
const getHtml = async (url: string) => {
  const data = await getData()

  const app = renderToString(<SSRApp url={url} data={data} />)

  const html = indexFile
      .replace('<div id="root"></div>',`<div id="root">${app}</div>`)
      .replace('<scirpt></scirpt>', '<script type="text/javascript">window.__data = JSON.parse(`' + JSON.stringify(data) + '`);</script>')

  return html
}

export const edgeLambdaHandler = async (event) => {
  try {
    const request = event.Records[0].cf.request;

    const body = await getHtml(request.uri)

    const res = {
      status: "200",
      statusDescription: "OK",
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
      },
      body,
    };

    return res
  } catch (error) {
    console.log(`Error ${error.message}`);
    return `Error ${error}`;
  }
};

export const apiGatewayHandler = async (event: { path: string }) => {
  try {
    const body = await getHtml(event.path)

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
