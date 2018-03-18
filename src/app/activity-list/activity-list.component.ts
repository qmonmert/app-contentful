import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "../contentful.service";
import { Entry } from "contentful";

@Component({
  selector: "app-activity-list",
  templateUrl: "./activity-list.component.html",
  styleUrls: ["./activity-list.component.css"]
})
export class ActivityListComponent implements OnInit {
  activities: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.contentfulService
      .getActivities()
      .then(activities => (this.activities = activities));
  }
}
