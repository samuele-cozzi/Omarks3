import { Pipe } from "@angular/core";

@Pipe({
  name: "dashboardPipe",
  pure: false
})
export class DashboardPipe {
  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
      //value[key]._key = key;
      keys.push({ key: key, value: value[key] });
    }
    for (let i = 0; i < keys.length; i++){
      if (i > 0) {
        keys[i].value._prev = keys[i - 1].value._key;
      }
      if (i < keys.length - 1) {
        keys[i].value._next = keys[i + 1].value._key;
      }
    }
    return keys;
  }
}