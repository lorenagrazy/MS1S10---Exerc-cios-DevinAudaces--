import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory/inventory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public readonly _inventory: InventoryService,
  ) { }
}
