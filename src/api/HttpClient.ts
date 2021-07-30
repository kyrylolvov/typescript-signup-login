import axios, { AxiosInstance, AxiosResponse } from "axios";

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this.initializeResponseInterceptors();
  }

  private initializeResponseInterceptors = () => {
    this.instance.interceptors.response.use(this.handleSuccessResponse);
  };

  private handleSuccessResponse = ({ data }: AxiosResponse) => data;
}

export default HttpClient;
