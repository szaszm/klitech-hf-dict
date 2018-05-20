import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';


@Pipe({
  name: 'uniq'
})
export class UniqPipe implements PipeTransform {

  transform(value: any[], arg?: any): any {
    return arg ? _.uniqBy(value, arg) : _.uniq(value);
  }

}
