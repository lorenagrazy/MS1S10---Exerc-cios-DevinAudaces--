/* eslint-disable no-underscore-dangle,class-methods-use-this,import/prefer-default-export */
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { InventoryService } from '../../services/inventory/inventory.service';
import { IProductListing } from '../../models/iproduct-listing';
import { CustomValidator } from '../../classes/custom-validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  public productForm = this._nfb.group(
    {
      productId: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      name: ['', [Validators.required, Validators.pattern(/[A-Za-z 0-9]+$/)]],
      price: ['', [Validators.required, CustomValidator.notNegative]],
      quantity: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    },
  );

  constructor(
    private readonly _auth: AuthService,
    private readonly _nfb: NonNullableFormBuilder,
    private readonly _inventory: InventoryService,
  ) { }

  private roundHundreds(value: number): number {
    const roundingConstant = 100;
    return Math.round(
      Number(value) * roundingConstant,
    ) / roundingConstant;
  }

  public updateInventory(): void {
    if (this.productForm.valid) {
      const {
        productId, quantity, name, price,
      } = this.productForm.controls;
      const numericPrice = Number(price.value);
      const roundedPrice = this.roundHundreds(numericPrice);
      const product: IProductListing = {
        productId: Number(productId.value),
        price: roundedPrice,
        quantity: Number(quantity.value),
        name: name.value,
        creator: this._auth.currentUserEmail,
      };
      this._inventory.addProduct(product);
    }
  }
}
