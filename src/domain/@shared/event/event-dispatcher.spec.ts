import { SendEmailWhenProductIsCreatedHandler } from '../../product/events/handlers/send-email-when-product-is-created.handler'
import { ProductCreatedEvent } from '../../product/events/product-created.event'
import { EventDispatcher } from './event-dispatcher'

describe('Domain events tests', () => {
  it('should register an event handler', () => {
    const eventDispatcher = new EventDispatcher()
    const eventHandler = new SendEmailWhenProductIsCreatedHandler()

    eventDispatcher.register('ProductCreatedEvent', eventHandler)

    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'])
      .toBeDefined()
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'].length)
      .toBe(1)
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'][0])
      .toMatchObject(eventHandler)
  })

  it('should unregister an event handler', () => {
    const eventDispatcher = new EventDispatcher()
    const eventHandler = new SendEmailWhenProductIsCreatedHandler()

    eventDispatcher.register('ProductCreatedEvent', eventHandler)
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'][0])
    .toMatchObject(eventHandler)
    
    eventDispatcher.unregister('ProductCreatedEvent', eventHandler)

    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'])
      .toBeDefined()
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'].length)
      .toBe(0)
  })

  it('should unregister all event handlers', () => {
    const eventDispatcher = new EventDispatcher()
    const eventHandler = new SendEmailWhenProductIsCreatedHandler()

    eventDispatcher.register('ProductCreatedEvent', eventHandler)
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'][0])
    .toMatchObject(eventHandler)
    
    eventDispatcher.unregisterAll()
    
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'])
      .toBeUndefined()
    expect(eventDispatcher.getEventHandlers).toEqual({})
  })

  it('should run all event handlers for a given event', () => {
    const eventDispatcher = new EventDispatcher()
    const eventHandler = new SendEmailWhenProductIsCreatedHandler()
    const eventHandlerSpy = jest.spyOn(eventHandler, 'handle')

    eventDispatcher.register('ProductCreatedEvent', eventHandler)
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'][0])
    .toMatchObject(eventHandler)
    
    const productCreatedEvent = new ProductCreatedEvent({
      id: 'p1',
      name: 'Product 1',
      price: 10
    })
    eventDispatcher.notify(productCreatedEvent)

    expect(eventHandlerSpy).toHaveBeenCalledWith(productCreatedEvent)
  })
})