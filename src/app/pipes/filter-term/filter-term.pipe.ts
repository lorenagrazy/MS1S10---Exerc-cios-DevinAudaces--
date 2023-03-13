import { Pipe, PipeTransform } from '@angular/core';
import { IProductListing } from '../../models/iproduct-listing';

@Pipe({
  name: 'filterTerm',
})
export class FilterTermPipe implements PipeTransform {
  transform(value: IProductListing[], keyword: string): IProductListing[] {
    const lowerKeyword = keyword.toLowerCase();
    return value.filter((product) => product.name
      .toLowerCase()
      .startsWith(lowerKeyword));
  }
}
