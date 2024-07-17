import { ApiPath } from "../../common/enums/enums";
import { type Trip } from "../../types/types";
import { Http } from "../http/http.service";

type Constructor = {
  baseUrl: string;
  http: Http;
};

class Trips {
  private http: Http;

  private baseUrl: string;

  private basePath: string;

  constructor({ baseUrl, http }: Constructor) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.basePath = ApiPath.TRIPS;
  }

  public getAll(): Promise<Trip[]> {
    return this.http.load(this.getUrl(), {
      method: "GET",
    });
  }

  public getById(id: string): Promise<Trip> {
    return this.http.load(this.getUrl(`/${id}`), {
      method: "GET",
    });
  }

  private getUrl(path = ""): string {
    return `${this.baseUrl}${this.basePath}${path}`;
  }
}

export { Trips };
