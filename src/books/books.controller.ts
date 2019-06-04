import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }
}
