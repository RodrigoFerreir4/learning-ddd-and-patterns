import { EventInterface } from './event.interface';
import { EventHandlerInterface } from './event-handler.interface';

export interface EventDispatcherInterface {
  register(eventName: string, eventHandler: EventHandlerInterface): void
  unregister(eventName: string, eventHandler: EventHandlerInterface): void
  unregisterAll(): void
  notify(event: EventInterface): void
}