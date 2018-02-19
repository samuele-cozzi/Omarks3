import { Pipe } from "@angular/core";

@Pipe({
  name: "dashboardPipe",
  pure: false
})
export class DashboardPipe {
  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
      value[key]._key = key;
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}