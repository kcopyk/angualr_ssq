import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ExamplepipePipe',
  standalone: true
})
export class ExamplepipePipe implements PipeTransform {

  transform(value: any, space: number = 2): string {
    if (!value) return '';

    try {
      return JSON.stringify(value, null, space);
    } catch (error) {
      console.error('Error transforming JSON:', error);
      return '';
    }
  }

}
