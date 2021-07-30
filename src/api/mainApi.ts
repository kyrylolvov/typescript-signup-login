import HttpClient from "./HttpClient";

export interface SignLoginRequestBody {
  email: string;
  password: string;
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
}

export default Main;
