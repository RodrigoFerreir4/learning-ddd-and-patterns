import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit tests", () => {
  it("should get total of orders", () => {
    const item = new OrderItem("i1", "Item1", 10, "p1", 1);
    const item2 = new OrderItem("i2", "Item2", 20, "p2", 2);

    const order = new Order("o1", "c1", [item]);
    const order2 = new Order("o2", "c2", [item2]);

    const total = OrderService.total([order, order2]);

    expect(total).toBe(50);
  });
});
