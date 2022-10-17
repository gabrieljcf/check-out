import Order from "./Order";
import ItemRepository from "./ItemRepository";

export default class OrderService {
  constructor(readonly itemRepository: ItemRepository) {}

  async preview(input: Input): Promise<Output> {
    
    const order = new Order(input.cpf);
    for (const orderItem of input.orderItems) {
      const item = await this.itemRepository.getItem(orderItem.idItem);
      order.addItem(item, orderItem.quantity);
    }
    return {
      total: order.getTotal(),
    };
  }
}

type Input = {
  cpf: string;
  orderItems: { idItem: number; quantity: number }[];
};

type Output = {
  total: number;
};
