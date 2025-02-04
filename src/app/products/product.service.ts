import { CreateProductDto, FindProductDto, UpdateProductDto } from "./product.dto";
import { IntProduct } from "./product.model";
import { simpleFaker, faker, da } from '@faker-js/faker';

export const products: IntProduct[] = [];

export const addProduct = (data: CreateProductDto): IntProduct => {

  const newProduct: IntProduct = {
    ...data,
    id: simpleFaker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  }

  products.push(newProduct);

  return newProduct;
}

export const updateProduct = (id: IntProduct['id'], changes: UpdateProductDto): IntProduct | string => {

  const index = products.findIndex(item => item.id === id);

  if (!index) {
    return 'Error, product not found'
  }

  const prevData = products[index];

  products[index] = {
    ...prevData,
    ...changes,
  };


  return products[index];
}

export const findProducts = (dto: FindProductDto): IntProduct[] => {

  // code

  return products;
}