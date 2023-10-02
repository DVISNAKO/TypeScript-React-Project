import { IProduct } from "../models";

export const products: IProduct[] = [
  {
    id: 1,
    title: "Evrika",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    category: "man",
    price: 10,
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Evrika2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    category: "man2",
    price: 11,
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];
