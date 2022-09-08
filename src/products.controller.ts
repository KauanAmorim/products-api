import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('LIV01', 'Book Software Development with TDD and DDD', 29.9),
    new Product('LIV02', 'Book Flutter for beginners', 39.9),
    new Product('LIV03', 'Book Artificial Intelligence as a service', 29.9),
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getOne(@Param('id') id: number): Product {
    console.log(id);
    return this.products[0];
  }

  @Post()
  create(@Body() product) {
    product.id = 7;
    this.products.push(product);
  }

  @Put()
  update(@Body() product): string {
    return product;
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    this.products.pop();
  }
}
