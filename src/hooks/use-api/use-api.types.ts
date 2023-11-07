import { Axios } from 'axios';

type HttpMethod = 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put';

export type UseApiProps = {
  service?: Axios;
  body?: object;
  method: HttpMethod;
  path: string;
};
