import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { ProductId: string }, context: any) => {
      const result = db.products.find((pd) => pd.id === args.ProductId);
      return result;
    },
  },
};
