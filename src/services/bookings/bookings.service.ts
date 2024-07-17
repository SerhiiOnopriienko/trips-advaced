import { ApiPath, ContentType } from "../../common/enums/enums";
import { type Booking, type NewBooking } from "../../types/types";
import { Http } from "../http/http.service";

type Constructor = {
  baseUrl: string;
  http: Http;
};

class Bookings {
  private http: Http;

  private baseUrl: string;

  private basePath: string;

  constructor({ baseUrl, http }: Constructor) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.basePath = ApiPath.BOOKINGS;
  }

  public getAll(): Promise<Booking[]> {
    return this.http.load(this.getUrl(), {
      method: "GET",
    });
  }

  public create(booking: NewBooking): Promise<Booking> {
    return this.http.load(this.getUrl(), {
      method: "POST",
      contentType: ContentType.JSON,
      payload: JSON.stringify(booking),
    });
  }

  public delete(bookingId: string): Promise<Booking> {
    return this.http.load(this.getUrl(`/${bookingId}`), {
      method: "DELETE",
    });
  }

  private getUrl(path = ""): string {
    return `${this.baseUrl}${this.basePath}${path}`;
  }
}

export { Bookings };
