import OrderItem from "../src/OrderItem";

test("Should be able to calculate the total", () => {
  const orderItem = new OrderItem(1, 50, 3);
  const total = orderItem.getTotal();
  expect(total).toBe(150);
});
