import { HttpProtocols } from '@presentation/protocols';

export function ok<T = any>(data: T): HttpProtocols.IResponse<T> {
  return {
    statusCode: 200,
    body: data,
  };
}
