import Coupon from "./Coupon";
import Cpf from "./Cpf";
import FreightCalculator from "./FreightCalculator";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
  private orderItems: OrderItem[];
  private cpf: Cpf;
  private coupon?: Coupon;
  private freight = 0;

  constructor(cpf: string, readonly date: Date = new Date()) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
  }

  addItem(item: Item, quantity: number) {
    const itemAlreadyExists = this.orderItems.some(
      (orderItem) => orderItem.idItem === item.idItem
    );
    if (itemAlreadyExists)
      throw new Error("This product has already been added");
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
    this.freight += FreightCalculator.calculate(item) * quantity;
  }

  addCoupon(coupon: Coupon) {
    if (coupon.isExpired(this.date)) return;
    this.coupon = coupon;
  }

  getTotal() {
    let total = this.orderItems.reduce((total, orderItem) => {
      return (total += orderItem.getTotal());
    }, 0);
    if (this.coupon) {
      total = total -= this.coupon.getDiscount(total);
    }
    total += this.freight;
    return total;
  }
}
