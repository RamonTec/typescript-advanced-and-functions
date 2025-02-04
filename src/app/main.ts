import { addProduct, products, updateProduct, findProducts } from './products/product.service';
import { simpleFaker, faker } from '@faker-js/faker';
import { Sizes } from './products/product.model';

for (let index = 0; index < 10; index++) {
  addProduct({
    title: faker.commerce.productName(),
    color: faker.color.human(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    isNew: faker.datatype.boolean(),
    price: parseFloat(faker.commerce.price()),
    size: faker.helpers.arrayElement([Sizes.L, Sizes.M, Sizes.S, Sizes.XL]),
    stock: faker.number.int(),
    tags: faker.helpers.arrayElements([faker.commerce.department()]),
    categoryId: simpleFaker.string.uuid(),
  });
}

console.log('products createds:', products);

const product = products[0];
updateProduct(product.id, {
  color: faker.color.human(),
  image: faker.image.url(),
  isNew: faker.datatype.boolean(),
});

findProducts({
  color: 'red',
  stock: 10,
  createdAt: new Date()
});
