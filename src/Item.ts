import Dimension from "./Dimension";

export default class Item {
  constructor(
    readonly idItem: number,
    readonly description: string,
    readonly price: number,
    readonly dimension: Dimension = new Dimension()
    
  ) {}

    getVolume() {
      return this.dimension.getVolume();
    }

  getDensity() {
    return this.dimension.getDensity();
  }
}
