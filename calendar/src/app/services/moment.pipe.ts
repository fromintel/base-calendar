import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "moment",
  pure: false,
})
export class MomentPipe implements PipeTransform {
  transform(m: moment.Moment, format: string = 'MMMM'): string {
    return m.format(format);
  }
}

/*
moment().format('MMMM Do YYYY, h:mm:ss a'); // December 18th 2020, 8:43:54 pm
moment().format('dddd');                    // Friday
moment().format("MMM Do YY");               // Dec 18th 20
moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020
*/
