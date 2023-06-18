import { Construct } from 'constructs'
import { aws_lambda as CdkLambda } from 'aws-cdk-lib'
import { FunctionProps, Runtime } from 'aws-cdk-lib/aws-lambda'
import * as path from 'path'

interface CustomProps extends FunctionProps {
  name: string
  folder: string
  handler: string
}

export class Lambda extends CdkLambda.Function {
  constructor(scope: Construct, id: string, props?: Partial<CustomProps>) {
    super(scope, id, {
      functionName: `project-${props?.name || 'name'}`,
      runtime: Runtime.NODEJS_18_X,
      code: CdkLambda.Code.fromAsset(
        path.join(__dirname, `../../dist/${props?.folder || 'handlers'}`)
      ),
      handler: `${props?.handler || 'index.handler'}`,
      ...props
    })
  }
}
