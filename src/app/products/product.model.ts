import { IntCategory } from "../categories/category.model";
import { IntBaseModel } from "../base.model";

export enum Sizes {
  S,
  M,
  L,
  XL
}

export interface IntProduct extends IntBaseModel {
  title: string;
  stock: number;
  image: string;
  description: string;
  color: string;
  price: number;
  size: Sizes;
  category: IntCategory;
  isNew: boolean;
  tags: string[];
}