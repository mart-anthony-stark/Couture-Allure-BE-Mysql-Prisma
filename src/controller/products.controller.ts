import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export default {
  getProducts: async (req: Request, res: Response) => {
    const products = await prisma.product.findMany();
    res.send(products);
  },

  createProduct: async (req: Request, res: Response) => {
    const product = await prisma.product.create({
      data: req.body,
    });
    res.send(product);
  },
};
