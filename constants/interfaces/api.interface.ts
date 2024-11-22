export enum ApiRequestMethod {
  GET = "GET",
  POST = "POST",
}

export interface ApiRequestProps {
  url: string;
  method: ApiRequestMethod;
  data?: any;
  headers?: Record<string, string>;
}
