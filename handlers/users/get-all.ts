import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    console.log({ event, tableName: process.env.TABLE_NAME })
    return {
        body: 'ok-example',
        statusCode: 200
    }
}