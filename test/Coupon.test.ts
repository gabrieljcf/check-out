import Coupon from "../src/Coupon";

test("Should be able to calculate the discount", () => {
  const coupon = new Coupon("Vale20", 20, new Date("2022-03-01T10:00:00"));
  const discount = coupon.getDiscount(500);
  expect(discount).toBe(100);
});

test("Should not be able to calculate the discount with invalid coupon", () => {
  const coupon = new Coupon("Vale20", 20, new Date("2022-03-01T10:00:00"));
  const isExpired = coupon.isExpired(new Date("2022-09-23T11:00:00"));
  expect(isExpired).toBe(true);
});
