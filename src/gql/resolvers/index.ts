import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,

    product: (parent: any, args: { ProductId: string }, context: any) => {
      const result = db.products.find((pd) => pd.id === args.ProductId);
      return result;
    },

    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context) => {
      return db.categories.find((category) => category.id === args.categoryId);
    },
  },

  Product: {
    category: (parent: { categoryId: string }, args, context) => {
      return db.categories.find(
        (category) => category.id === parent.categoryId
      );
    },

    reviews: ({ id }, args: any, context: any) => {
      return db.reviews.filter((review) => review.productId === id);
    },
  },

  Category: {
    products: (parent, args, context) => {
      const result = db.products.filter(
        (product) => product.categoryId === parent.id
      );

      return result;
    },
  },
};
