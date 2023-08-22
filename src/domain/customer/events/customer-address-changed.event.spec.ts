import { Address } from "../value-objects/address";
import { Customer } from "../entities/customer";
import { CustomerAddressChangedEvent } from "./customer-address-changed.event";
import { SendConsoleLogHandler } from "./handlers/send-console-log.handler";
import { EventDispatcher } from "../../@shared/event/event-dispatcher";

describe("Customer created event unit tests", () => {
  it("should run ChangeCustomerAddressEvent handlers when a customer address is changed", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendConsoleLogHandler();
    const eventHandlerSpy = jest.spyOn(eventHandler, "handle");

    eventDispatcher.register("CustomerAddressChangedEvent", eventHandler);
    const customer = new Customer("1", "John");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
    customer.changeAddress(address);
    const customerAddressChangedEvent = new CustomerAddressChangedEvent({
      id: customer.id,
      name: customer.name,
      address: customer.address,
    });
    eventDispatcher.notify(customerAddressChangedEvent);

    expect(eventHandlerSpy).toHaveBeenCalledWith(customerAddressChangedEvent);
  });
});
