import Address from "./entity/address";
import { Customer } from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("123", "John Doe", "Rua um, 1, Cuiabá, 123123");
const address = new Address("Rua um", "Cuiabá", 1, "123123");
customer._address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 20);

const order = new Order("1", "123", [item1, item2]);