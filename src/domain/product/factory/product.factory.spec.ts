import { ProductFactory } from "./product.factory"

describe('Product factory unit tests', () => {
  it('should create a product of type a', () => {
    const product = ProductFactory.create('a', 'Product A', 10)

    expect(product.getId()).toBeDefined()
    expect(product.getName()).toBe('Product A')
    expect(product.getPrice()).toBe(10)
    expect(product.constructor.name).toBe('Product')
  })

  it('should create a product of type b', () => {
    const product = ProductFactory.create('b', 'Product B', 20)

    expect(product.getId()).toBeDefined()
    expect(product.getName()).toBe('Product B')
    expect(product.getPrice()).toBe(20)
    expect(product.constructor.name).toBe('ProductB')
  })

  it('should throw erro when product type is not supported', () => {
    expect(() => {
      ProductFactory.create('c', 'Product C', 30)
    }).toThrowError('Product type not supported')
  })
})