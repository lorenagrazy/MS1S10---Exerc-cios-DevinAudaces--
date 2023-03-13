import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailToUser',
})
export class EmailToUserPipe implements PipeTransform {
  public transform(value: string): string {
    return value.split('@')[0];
  }
}
