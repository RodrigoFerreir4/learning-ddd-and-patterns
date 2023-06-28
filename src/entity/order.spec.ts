import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("should throw error when Items is empty", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrowError("Items is required");
  });

  it("should calculate total", () => {
    const item = new OrderItem("123", "item 1", 100);
    const order = new Order("123", "123", [item]);

    let total = order.total();

    expect(total).toBe(100);

    const order2 = new Order("123", "123", [item, item]);
    total = order2.total();
    expect(total).toBe(200);
  });
});
