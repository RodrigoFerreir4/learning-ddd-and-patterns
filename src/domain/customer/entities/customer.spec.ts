import { Address } from '../value-objects/address'
import { Customer } from './customer'

describe('Customer unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new Customer('', 'Alan')
    }).toThrowError('ID is required')
  })

  it('should throw error when name is empty', () => {
    expect(() => {
      new Customer('1', '')
    }).toThrowError('Name is required')
  })

  it('should change name', () => {
    // Arrange
    const customer = new Customer('1', 'Alan')
    // Act
    customer.changeName('John')
    // Assert
    expect(customer.name).toBe('John')
  })

  it('should throw error when trying to activate a customer without an address', () => {
    const customer = new Customer('1', 'Customer 1')

    expect(() => {
      customer.activate()
    }).toThrowError('Address is required to activate a customer')
  })

  it('should activate customer', () => {
    const customer = new Customer('1', 'Customer 1')
    const address = new Address('Street 1', 123, '13330-250', 'SP')
    
    customer.changeAddress(address)
    customer.activate()

    expect(customer.isActive()).toBe(true)
  })

  it('should deactivate customer', () => {
    const customer = new Customer('1', 'Customer 1')

    customer.deactivate()

    expect(customer.isActive()).toBe(false)
  })

  it('should add reward points', () => {
    const customer = new Customer('1', 'Customer 1')
    expect(customer.rewardPoints).toBe(0)

    customer.addRewardPoints(10)
    expect(customer.rewardPoints).toBe(10)
    
    customer.addRewardPoints(10)
    expect(customer.rewardPoints).toBe(20)
  })
})