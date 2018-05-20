import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';


@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(values: object[], propertyName: any): any[] {
    return _.map(values, propertyName);
  }

}
