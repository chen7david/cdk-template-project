import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { Lambda } from './constructs/Lambda'

export class CdkTemplateProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    const exampleLambda = new Lambda(this, 'ExampleLambdaId',{
      name: 'example',
      folder: 'handlers/example',
      handler: 'get-all.handler',
    })
  }
}
