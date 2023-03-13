import { Injectable } from '@angular/core';
import { IProductListing } from '../../models/iproduct-listing';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  public inventory: IProductListing[] = [
    {
      productId: 1,
      name: 'pão',
      quantity: 2,
      price: 10,
      creator: 'Lorena',
    },
    {
      productId: 2,
      name: 'bolo',
      quantity: 5,
      price: 15,
      creator: 'Lorena',
    },
    {
      productId: 3,
      name: 'sorvete',
      quantity: 67,
      price: 18,
      creator: 'Lorena',
    },
    {
      productId: 4,
      name: 'pastel',
      quantity: 6,
      price: 89,
      creator: 'Lorena',
    },
    {
      productId: 5,
      name: 'espaguete',
      quantity: 2,
      price: 15,
      creator: 'Lorena',
    }, {
      productId: 6,
      name: 'hamburguer',
      quantity: 20,
      price: 11,
      creator: 'Lorena',
    },
    {
      productId: 7,
      name: 'trident',
      quantity: 28,
      price: 5,
      creator: 'Lorena',
    },
  ];

  public getProduct(productId: number): IProductListing | undefined {
    return this.inventory.find((product) => productId === product.productId);
  }

  public addProduct(product: IProductListing): void {
    this.inventory.push(product);
  }

  public get inventorySize(): number {
    return this.inventory.length;
  }
}
