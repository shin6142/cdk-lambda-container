import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import path = require('path');


export class CdkLambdaContainerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.DockerImageFunction(this, "cdk-docker-container-lambda", {
      code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, 'src')),
    });
  }
}
