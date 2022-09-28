export default class Coupon {
  constructor(readonly code: string, readonly percentage: number, readonly expiredDate: Date) {}

  getDiscount(total: number) {
    return (total * this.percentage) / 100;
  }

  isExpired(today: Date) {
    if (this.expiredDate.getTime() < today.getTime()) return true;
  }
}
