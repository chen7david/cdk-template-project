import { Construct } from 'constructs'
import {
  Table,
  TableProps,
  Attribute,
  AttributeType
} from 'aws-cdk-lib/aws-dynamodb'
import { RemovalPolicy } from 'aws-cdk-lib'

interface ExtendedProps extends TableProps {
  name: string
  folder: string
  handler: string
}

export class DynamoTable extends Table {
  constructor(scope: Construct, id: string, props?: Partial<ExtendedProps>) {
    super(scope, id, {
      tableName: `project-${props?.name || 'name'}`,
      partitionKey: { name: 'pk', type: AttributeType.STRING },
      sortKey: { name: 'sk', type: AttributeType.STRING },
      removalPolicy: RemovalPolicy.DESTROY,
      ...props
    })
  }
}
