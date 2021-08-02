import { AxiosRequestConfig, AxiosResponse } from "axios";
import HttpClient from "./HttpClient";

abstract class HttpClientProtected extends HttpClient {
  constructor(baseURL: string) {
    super(baseURL);

    this.initializeRequestInterceptors();
  }

  private initializeRequestInterceptors = () => {
    this.instance.interceptors.request.use(this.handleMe);
  };

  private handleMe = (config: AxiosRequestConfig) => {
    const accessToken = localStorage.getItem("accessToken");

    const updatedConfig = config;
    updatedConfig.headers.Authorization = `Bearer ${accessToken}`;

    return updatedConfig;
  };
}

export default HttpClientProtected;
