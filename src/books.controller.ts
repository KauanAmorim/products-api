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
import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Book> {
    return this.booksService.getOne(id);
  }

  @Post()
  async create(@Body() book: Book) {
    await this.booksService.create(book);
  }

  @Put()
  async update(@Body() book) {
    await this.booksService.update(book);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: number) {
    await this.booksService.delete(id);
  }
}
