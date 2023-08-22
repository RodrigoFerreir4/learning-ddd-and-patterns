import { Order } from './order'
import { OrderItem } from './order-item'

describe('Order unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new Order('', '1', [])
    }).toThrowError('ID is required')
  })

  it('should throw error when customerId is empty', () => {
    expect(() => {
      new Order('1', '', [])
    }).toThrowError('CustomerId is required')
  })

  it('should throw error when items are empty', () => {
    expect(() => {
      new Order('1', '1', [])
    }).toThrowError('Items are required')
  })

  it('should calculate total', () => {
    const item1 = new OrderItem('1', 'Item 1', 10, 1, 'p1')
    const item2 = new OrderItem('2', 'Item 2', 15, 2, 'p2')
    const order = new Order('1', '1', [item1, item2])

    const total = order.total()

    expect(total).toBe(40)
  })

  it('should throw error if item quantity is less or equal than 0', () => {
    expect(() => {
      const item1 = new OrderItem('1', 'Item 1', 10, 0, 'p1')
      new Order('1', '1', [item1])
    }).toThrowError("Quantity must be greater then 0")
  })
})