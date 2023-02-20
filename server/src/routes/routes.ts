import { Router } from "express";
import productController from "../controllers/productController";

const routes = Router();

routes.get("/products", productController.getProducts);
routes.post("/product", productController.createProduct);
routes.put("/product/:id", productController.updateProduct);
routes.delete("/product/:id", productController.deleteProduct);

export default routes;
