export const handler = async (event: unknown) => {
    console.log({ event, tableName: process.env.TABLE_NAME })
    return {
        body: 'ok-example',
        statusCode: 200
    }
}