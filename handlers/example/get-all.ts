export const handler = async (event: unknown) => {
    console.log({ event })
    return {
        body: 'ok-example',
        statusCode: 200
    }
}