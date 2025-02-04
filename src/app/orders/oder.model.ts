import { IntBaseModel } from "../base.model";
import { IntProduct } from "../products/product.model";
import { IntUser } from "../users/user.model";

export interface IntOrder extends IntBaseModel  {
  products: IntProduct[];
  user: IntUser;
}