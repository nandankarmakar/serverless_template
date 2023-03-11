import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { nameEvent } from '../types/nameEvent';
export const postHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const reqBody: nameEvent = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: `Hello ${reqBody.name}`,
  };
};
