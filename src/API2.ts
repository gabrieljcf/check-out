import express from "express";
import PreviewOrder from "./PreviewOrder";

const app = express();
app.use(express.json());

app.post("/orderPreview", async (request, response) => {
  const { cpf, orderItems } = request.body;
  const previewOrder = new PreviewOrder();
  const output = await previewOrder.execute({ cpf, orderItems });
  response.json(output);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
