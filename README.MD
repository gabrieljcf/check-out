## Check-out

### Rules
- You must not create an order with an invalid cpf
- You must create an order with 3 items (with description, price and quantity)
- You must create an order with a discount coupon (percentage of the total order)
- Must not apply expired discount coupon
- When placing an order, the quantity of an item cannot be negative
- When placing an order, the same item cannot be informed more than once
- No item dimension can be negative
- Item weight cannot be negative
- You must calculate the freight value based on the dimensions (height, width and depth in cm) and the weight of the products (in kg)
- You must return the minimum freight price if it is higher than the calculated value

## Run Project
- yarn or npm install
- yarn jest or npx jest
