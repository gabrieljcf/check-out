import Dimension from "../src/Dimension"

test("Should not be able to create a new dimension with a negative width", () => {
    expect(() => new Dimension(-1, 0, 0, 0)).toThrow("Invalid dimension");
});
test("Should not be able to create a new dimension with a negative height", () => {
    expect(() => new Dimension(0, -1, 0, 0)).toThrow("Invalid dimension");
});
test("Should not be able to create a new dimension with a negative length", () => {
    expect(() => new Dimension(0, 0, -1, 0)).toThrow("Invalid dimension");
});
test("Should not be able to create a new dimension with a negative weight", () => {
    expect(() => new Dimension(0, 0, 0, -1)).toThrow("Invalid dimension");
});