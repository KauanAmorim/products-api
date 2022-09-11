import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book,
  ) {}

  async getAll(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  async getOne(id: number): Promise<Book> {
    return this.bookModel.findByPk(id);
  }

  async create(book: Book): Promise<void> {
    await this.bookModel.create(book);
  }

  async update(book: Book): Promise<void> {
    await this.bookModel.update(book, { where: { id: book.id } });
  }

  async delete(id: number): Promise<void> {
    const book = await this.getOne(id);
    book.destroy();
  }
}
