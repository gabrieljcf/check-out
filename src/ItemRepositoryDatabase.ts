import pgp from "pg-promise";
import Dimension from "./Dimension";
import Item from "./Item";
import ItemRepository from "./ItemRepository";


export default class ItemRepositoryDatabase implements ItemRepository {
  async getItem(idItem: number): Promise<Item> {
    const connection = pgp()(
        "postgres://gabriel:123456@localhost:5432/app"
      );
    const [itemData] = await connection.query(
      "SELECT * FROM item where id_item = $1",
      [idItem]
    );
    const dimension =  new Dimension(itemData.width, itemData.height, itemData.length, itemData.weight)
    const item = new Item(itemData.id_item, itemData.description, parseFloat(itemData.price), dimension);
    connection.$pool.end();
    return item;
  }
}
