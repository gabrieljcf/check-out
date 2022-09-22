import Coupon from "../src/Coupon";

test("Should be able to calculate the discount", () => {
  const coupon = new Coupon("Vale20", 20);
  const discount = coupon.getDiscount(500);
  expect(discount).toBe(100);
});
