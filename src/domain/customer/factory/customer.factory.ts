import { v4 as uuid } from 'uuid'
import { Customer } from '../entities/customer';
import { Address } from '../value-objects/address';

export class CustomerFactory {
  static create(name: string): Customer {
    return new Customer(uuid(), name)
  }

  static createWithAddress(name: string, address: Address): Customer {
    const customer = new Customer(uuid(), name)
    customer.changeAddress(address)
    return customer
  }
}