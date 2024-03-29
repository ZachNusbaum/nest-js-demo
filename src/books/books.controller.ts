import { Controller, Get, Param, Post, Body } from '@nestjs/common';
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

  @Get(':bookID')
  async getBook(@Param('bookID') bookID) {
    const book = await this.booksService.getBook(bookID);
    return book;
  }

  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const books = await this.booksService.addBook(createBookDTO);
    return books;
  }
}
