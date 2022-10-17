import ItemRepositoryInMemory from "../src/ItemRepositoryInMemory";
import OrderService from "../src/OrderService";

test("Should be able to simulate an order", async () => {
  const input = {
    cpf: "886.634.854-68",
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ],
  };
  const itemRepository = new ItemRepositoryInMemory();
  const service = new OrderService(itemRepository);
  const output = await service.preview(input);
  expect(output.total).toBe(6350);
});
