import { Injectable } from "@angular/core";
import { createClient, Entry } from "contentful";
import { environment } from "../environments/environment";

@Injectable()
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  });

  constructor() {}

  getActivities(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: "strava"
          },
          query
        )
      )
      .then(res => res.items);
  }
}
