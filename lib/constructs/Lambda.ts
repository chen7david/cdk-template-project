import { Construct } from 'constructs'
import { FunctionProps, Runtime, Function, Code } from 'aws-cdk-lib/aws-lambda'
import * as path from 'path'

interface ExtendedProps extends FunctionProps {
  name: string
  folder: string
  handler: string
}

export class Lambda extends Function {
  constructor(scope: Construct, id: string, props?: Partial<ExtendedProps>) {
    super(scope, id, {
      functionName: `project-${props?.name || 'name'}`,
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset(
        path.join(__dirname, `../../dist/${props?.folder || 'handlers'}`)
      ),
      handler: `${props?.handler || 'index.handler'}`,
      ...props
    })
  }
}
