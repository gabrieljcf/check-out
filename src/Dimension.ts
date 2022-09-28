export default class Dimension {
  private readonly DENSITY = 100
  
  constructor(
    readonly width = 0,
    readonly height = 0,
    readonly length = 0,
    readonly weight = 0
  ) {
    if (width < 0 || height < 0 || length < 0 || weight < 0) throw new Error("Invalid dimension");
  }

  getVolume() {
    return ((((this.width / this.DENSITY) * this.height) / this.DENSITY) * this.length) / this.DENSITY;
  }

  getDensity() {
    if (this.getVolume() === 0) return 0;
    return this.weight / this.getVolume();
  }
}
