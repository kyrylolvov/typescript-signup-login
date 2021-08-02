import axios from "axios";
import HttpClient from "./HttpClient";

interface SignLoginRequestBody {
  email: string;
  password: string;
}

interface RefreshRequestBody {
  body: {
    access_token: string;
    refresh_token: string;
  };
  statusCode: number;
}

class Main extends HttpClient {
  private static instanceCached: Main;

  private constructor() {
    super("http://142.93.134.108:1111/");
  }

  static getInstance = () => {
    if (!Main.instanceCached) {
      Main.instanceCached = new Main();
    }

    return Main.instanceCached;
  };

  public signUp = (body: SignLoginRequestBody) =>
    this.instance.post<{ message: string; status: string }>("/sign_up", body);

  public logIn = (body: SignLoginRequestBody) =>
    this.instance.post<{
      message: string;
    }>(`/login?email=${body.email}&password=${body.password}`, {
      params: { body },
    });

  public refresh = (token: string) =>
    axios({
      method: "post",
      url: "http://142.93.134.108:1111/refresh",
      headers: { Authorization: `Bearer ${token}` },
    });
  // this.instance.post<RefreshRequestBody>("/refresh", null, {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
}

export default Main;
