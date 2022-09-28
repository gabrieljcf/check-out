import Coupon from "../src/Coupon";
import Dimension from "../src/Dimension";
import Item from "../src/Item";
import Order from "../src/Order";

test("Should be able to create a new order with valid cpf", () => {
  const order = new Order("886.634.854-68");
  const total = order.getTotal();
  expect(total).toBe(0);
});

test("Should not be able to create a new order with invalid cpf", () => {
  expect(() => new Order("111.111.111-11")).toThrow(new Error("Invalid CPF"));
});

test("Should be able to create a new order with thre itens", () => {
  const order = new Order("886.634.854-68");
  order.addItem(new Item(1, "Guitarra", 1000), 1);
  order.addItem(new Item(2, "Amplificador", 5000), 1);
  order.addItem(new Item(3, "Cabo", 30), 3);
  const total = order.getTotal();
  expect(total).toBe(6090);
});

test("Should be able to create a new order with descount coupon", () => {
  const order = new Order("886.634.854-68");
  order.addItem(new Item(1, "Guitarra", 1000), 1);
  order.addItem(new Item(2, "Amplificador", 5000), 1);
  order.addItem(new Item(3, "Cabo", 30), 3);
  order.addCoupon(new Coupon("VALE20", 20, new Date("2022-09-30T10:00:00")));
  const total = order.getTotal();
  expect(total).toBe(4872);
});

test("Should not be able to aply a discount with expired coupon", () => {
  const order = new Order("886.634.854-68", new Date("2022-10-01T10:00:00"));
  order.addItem(new Item(1, "Guitarra", 1000), 1);
  order.addItem(new Item(2, "Amplificador", 5000), 1);
  order.addItem(new Item(3, "Cabo", 30), 3);
  order.addCoupon(new Coupon("VALE20", 20, new Date("2022-09-01T10:00:00")));
  const total = order.getTotal();
  expect(total).toBe(6090);
});

test("Should not be able to create a new order with invalid quantity", () => {
  const order = new Order("886.634.854-68");
  expect(() => order.addItem(new Item(1, "Guitarra", 1000), -1)).toThrow(
    new Error("Invalid quantity")
  );
});

test("Should not be able to create a new order with the same item", () => {
  const order = new Order("886.634.854-68");
  order.addItem(new Item(1, "Guitarra", 1000), 1);
  expect(() => order.addItem(new Item(1, "Guitarra", 1000), 1)).toThrow(
    new Error("This product has already been added")
  );
});

test("Should be able to create a new order with thre itens and calculate the freight", () => {
  const order = new Order("886.634.854-68");
  order.addItem(new Item(1, "Guitarra", 1000, new Dimension(100, 30, 10, 3)), 1);
  order.addItem(new Item(2, "Amplificador", 5000, new Dimension(50, 50, 50, 20)), 1);
  order.addItem(new Item(3, "Cabo", 30, new Dimension(10, 10, 10, 1)), 3);
  const total = order.getTotal();
  expect(total).toBe(6350);
});
