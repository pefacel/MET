import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperLessAndOr'
})
export class UpperLessAndOrPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
