import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  
  transform(value: any, format: string = 'yyyy-MM-dd'): string {
    return super.transform(value, format); 
  }
}
