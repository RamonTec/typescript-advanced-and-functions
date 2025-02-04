import { IntProduct } from "./product.model";

export interface CreateProductDto extends Omit<IntProduct, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string,
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export interface FindProductDto extends Readonly<Partial<IntProduct>> {}