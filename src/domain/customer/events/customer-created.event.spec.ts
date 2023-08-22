import { EventDispatcher } from '../../@shared/event/event-dispatcher'
import { CustomerCreatedEvent } from './customer-created.event'
import { SendConsoleLog1Handler } from './handlers/send-console-log-1.handler'
import { SendConsoleLog2Handler } from './handlers/send-console-log-2.handler'

describe('Customer created event unit tests', () => {
  it('should run CustomerCreatedEvent handlers when a customer is created', () => {
    const eventDispatcher = new EventDispatcher()
    const eventHandler1 = new SendConsoleLog1Handler()
    const eventHandler2 = new SendConsoleLog2Handler()
    const eventHandler1Spy = jest.spyOn(eventHandler1, 'handle')
    const eventHandler2Spy = jest.spyOn(eventHandler2, 'handle')

    eventDispatcher.register('CustomerCreatedEvent', eventHandler1)
    eventDispatcher.register('CustomerCreatedEvent', eventHandler2)
    const customerCreatedEvent = new CustomerCreatedEvent({})
    eventDispatcher.notify(customerCreatedEvent)

    expect(eventHandler1Spy).toHaveBeenCalledWith(customerCreatedEvent)
    expect(eventHandler2Spy).toHaveBeenCalledWith(customerCreatedEvent)
  })
})