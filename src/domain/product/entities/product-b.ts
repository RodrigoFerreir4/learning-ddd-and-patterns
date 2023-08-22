import { ProductInterface } from "./product.interface"

export class ProductB implements ProductInterface {
  private _id: string
  private _name: string
  private _price: number

  constructor(id: string, name: string, price: number) {
    this._id = id
    this._name = name
    this._price = price
    this.validate()
  }

  validate(): void {
    if (this._id.length === 0) {
      throw new Error('ID is required')
    }
    if (this._name.length === 0) {
      throw new Error('Name is required')
    }
    if (this._price < 0) {
      throw new Error('Price must be greater than zero')
    }
  }

  changeName(name: string): void {
    if (name.length === 0) {
      throw new Error('Name is required')
    }
    this._name = name
  }

  changePrice(price: number): void {
    if (price < 0) {
      throw new Error('Price must be greater than zero')
    }
    this._price = price
  }

  getId(): string {
    return this._id
  }
  getName(): string {
    return this._name
  }
  getPrice(): number {
    return this._price
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get price(): number {
    return this._price
  }
}