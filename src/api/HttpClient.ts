import axios, { AxiosInstance, AxiosResponse } from "axios";
import Main from "./mainApi";

interface CustomResponse
  extends AxiosResponse<{
    statusCode: number;
  }> {}

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

  private handleSuccessResponse = async (response: CustomResponse) => {
    const status = response.data.statusCode;
    const main = Main.getInstance();
    const currentRefreshToken = localStorage.getItem("refreshToken");

    if (status !== 401) return response.data;

    if (status === 401 && currentRefreshToken) {
      try {
        const refreshResponse = await main.refresh(currentRefreshToken);

        localStorage.setItem(
          "accessToken",
          refreshResponse.data.body.access_token
        );
        localStorage.setItem(
          "refreshToken",
          refreshResponse.data.body.refresh_token
        );

        response.config.headers.Authorization = `Bearer ${refreshResponse.data.body.access_token}`;
        const data = await this.instance.request(response.config);
        return data;
      } catch (_) {
        return Promise.reject(response);
      }
    }
    return Promise.reject(response);
  };
  //
}

export default HttpClient;
