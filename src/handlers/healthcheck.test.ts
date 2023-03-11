import { APIGatewayProxyEvent } from 'aws-lambda';
import { postHandler } from './healthcheck';
describe('healthcheck.postHandler()', () => {
  it('should return ok if successful', async () => {
    const event = {
      body: JSON.stringify({
        name: 'Nandan',
      }),
    } as APIGatewayProxyEvent;
    const response = await postHandler(event);
    expect(response).toStrictEqual({
      statusCode: 200,
      body: 'Hello Nandan',
    });
  });
});
