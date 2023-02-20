import { Router } from "express";
import productController from "../controllers/productController";

const routes = Router();

routes.get("/products", productController.getProducts);
routes.post("/products", productController.createProduct);
routes.put("/products/:id", productController.updateProduct);
routes.delete("/products/:id", productController.deleteProduct);

export default routes;
