import Item from "./Item";

export default class FreightCalculator {
  static readonly MIN_FREIGHT = 10;
  static readonly DISTANCE = 1000;
  static readonly DENSITY = 100;

  static calculate(item: Item) {
    const freight =
      item.getVolume() * this.DISTANCE * (item.getDensity() / this.DENSITY);
    if (freight === 0) return 0;
    return Math.max(freight, this.MIN_FREIGHT);
  }
}
