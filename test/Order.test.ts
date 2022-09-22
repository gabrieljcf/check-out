import Coupon from "../src/Coupon";
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
  order.addItem(new Item(1, "Amplificador", 5000), 1);
  order.addItem(new Item(1, "Cabo", 30), 3);
  const total = order.getTotal();
  expect(total).toBe(6090);
});

test("Should be able to create a new order with descount coupon", () => {
  const order = new Order("886.634.854-68");
  order.addItem(new Item(1, "Guitarra", 1000), 1);
  order.addItem(new Item(1, "Amplificador", 5000), 1);
  order.addItem(new Item(1, "Cabo", 30), 3);
  order.addCoupon(new Coupon("VALE20", 20));
  const total = order.getTotal();
  expect(total).toBe(4872);
});
