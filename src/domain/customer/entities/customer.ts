import { Address } from "../value-objects/address";

export class Customer {
  private readonly _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate(): void {
    if (this._id.length === 0) {
      throw new Error("ID is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
  }

  changeName(name: string): void {
    if (name.length === 0) {
      throw new Error("Name is required");
    }
    this._name = name;
  }

  changeAddress(address: Address): void {
    if (!address) {
      throw new Error("Address is required");
    }
    this._address = address;
  }

  activate(): void {
    if (!this._address) {
      throw new Error("Address is required to activate a customer");
    }
    this._active = true;
  }

  deactivate(): void {
    this._active = false;
  }

  isActive(): boolean {
    return this._active;
  }

  addRewardPoints(points: number): void {
    this._rewardPoints += points;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  get address(): Address {
    return this._address;
  }
}
