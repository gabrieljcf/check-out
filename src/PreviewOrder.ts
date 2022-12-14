import Dimension from "./Dimension";
import Item from "./Item";
import Order from "./Order";
import pgp from "pg-promise";

export default class PreviewOrder {
  constructor() {}

  async execute(input: Input): Promise<Output> {
    const connection = pgp()("postgres://gabriel:123456@localhost:5432/app");
    const order = new Order(input.cpf);
    for (const orderItem of input.orderItems) {
      const [itemData] = await connection.query(
        "SELECT * FROM item where id_item = $1",
        [orderItem.idItem]
      );
      const item = new Item(
        itemData.id_item,
        itemData.description,
        parseFloat(itemData.price),
        new Dimension(
          itemData.width,
          itemData.height,
          itemData.length,
          itemData.weight
        )
      );
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
