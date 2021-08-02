import HttpClientProtected from "./HttpClientProtected";

interface GetMeResponse {
  body: {
    message: string;
    status: string;
  };
  statusCode: number;
}

class MainProtected extends HttpClientProtected {
  private static instanceCached: MainProtected;

  private constructor() {
    super("http://142.93.134.108:1111/");
  }

  static getInstance = () => {
    if (!MainProtected.instanceCached) {
      MainProtected.instanceCached = new MainProtected();
    }

    return MainProtected.instanceCached;
  };

  public getMe = () => this.instance.get<GetMeResponse>("/me");
}

export default MainProtected;
