import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory/inventory.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  constructor(
    public readonly _inventory: InventoryService,
  ) { }
}
