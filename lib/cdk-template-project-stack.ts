import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { Lambda } from './constructs/Lambda'
import { Runtime } from 'aws-cdk-lib/aws-lambda'
import { DynamoTable } from './constructs/Dynamo'
import { ApiGateway } from './constructs/ApiGateway'

export class CdkTemplateProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const table = new DynamoTable(this, 'DynamoTableId', {
      name: 'example-table'
    })

    const userLambda = new Lambda(this, 'UserLambdaId', {
      name: 'user',
      folder: 'handlers/users',
      handler: 'get-all.handler',
      environment: {
        TABLE_NAME: table.tableName
      }
    })
    
    const storeLambda = new Lambda(this, 'StoreLambdaId', {
      name: 'store',
      folder: 'handlers/stores',
      handler: 'get-all.handler',
      environment: {
        TABLE_NAME: table.tableName
      }
    })

    // Assign read write permissions to lambdas
    table.grantReadWriteData(userLambda)

    const api = new ApiGateway(this)
    api.addIntergration('GET', '/users', userLambda)
  }
}
