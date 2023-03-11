const getData = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
}
const getHtml = async (path: string) => {
  const data = await getData()
}
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
