import Product from "./product";

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Product("", "product 1", 100);
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let order = new Product("1", "", 100);
    }).toThrowError("Name is required");
  });

  it("should throw error when price is less than zero", () => {
    expect(() => {
      let order = new Product("1", "product 1", -1);
    }).toThrowError("Price must be grater than zero");
  });

  it("should change name", () => {
    const product = new Product("1", "product 1", 100);
    product.changeName("product 2");
    expect(product.name).toBe("product 2");
  });

  it("should change price", () => {
    const product = new Product("1", "product 1", 100);
    product.changePrice(212);
    expect(product.price).toBe(212);
  });
});