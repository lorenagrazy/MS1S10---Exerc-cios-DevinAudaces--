import { Component, Input } from '@angular/core';
import { IProductListing } from '../../models/iproduct-listing';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input('inventoryProducts') inventoryProducts!: IProductListing[];

  public filterKeyword: string = '';
}
