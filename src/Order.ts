import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
  private orderItems: OrderItem[];
  private cpf: Cpf;
  private coupon?: Coupon;

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
  }

  addItem(item: Item, quantity: number) {
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
  }

  addCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }

  getTotal() {
    let total = this.orderItems.reduce((total, orderItem) => {
      return (total += orderItem.getTotal());
    }, 0);
    if (this.coupon) {
      total = total -= this.coupon.getDiscount(total);
    }
    return total;
  }
}
