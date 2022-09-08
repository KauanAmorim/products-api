import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'All products';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `return products with id: ${id}`;
  }

  @Post()
  create(@Body() product): string {
    console.log(product);
    return 'Product created';
  }

  @Put()
  update(@Body() product): string {
    console.log(product);
    return 'Product updated';
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `product ${id} deleted`;
  }
}
