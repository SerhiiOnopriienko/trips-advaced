import { ContentType } from "../../common/enums/enums";
import { type AuthUser } from "../../types/types";
import { Http } from "../http/http.service";

type Constructor = {
  baseUrl: string;
  http: Http;
};

class Auth {
  private http: Http;

  private baseUrl: string;

  constructor({ baseUrl, http }: Constructor) {
    this.baseUrl = baseUrl;
    this.http = http;
  }

  public getUser(): Promise<AuthUser> {
    return this.http.load(this.getUrl("auth/authenticated-user"), {
      method: "GET",
    });
  }

  public async signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<AuthUser> {
    const response = await this.http.load<AuthUser>(
      this.getUrl("auth/sign-in"),
      {
        method: "POST",
        contentType: ContentType.JSON,
        payload: JSON.stringify({ email, password }),
      }
    );
    return response;
  }

  public signUp({
    fullName,
    email,
    password,
  }: {
    fullName: string;
    email: string;
    password: string;
  }): Promise<AuthUser> {
    return this.http.load(this.getUrl("auth/sign-up"), {
      method: "POST",
      contentType: ContentType.JSON,
      payload: JSON.stringify({ fullName, email, password }),
    });
  }

  public signOut(): void {
    localStorage.removeItem("token");
  }

  private getUrl(path = ""): string {
    return `${this.baseUrl}${path}`;
  }
}

export { Auth };
