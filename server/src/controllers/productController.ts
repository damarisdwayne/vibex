import { Request, Response } from "express";
import Product from "../models/product";

class ProductController {
  public getProducts = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const products = await Product.findAll();
      return res.json(products);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  public createProduct = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { description, image, price } = req.body;
      const product = await Product.create({
        description,
        image,
        price,
      });
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  public updateProduct = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      const { description, image, price } = req.body;
      const [rowsUpdated, [updatedProduct]] = await Product.update(
        {
          description,
          image,
          price,
        },
        {
          where: { id },
          returning: true,
        }
      );
      if (rowsUpdated === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.json(updatedProduct);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };

  public deleteProduct = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      const rowsDeleted = await Product.destroy({
        where: { id },
      });
      if (rowsDeleted === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };
}

export default new ProductController();
