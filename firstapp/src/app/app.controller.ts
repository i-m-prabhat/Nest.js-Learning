import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('/')
export class BookController
{

    constructor(private bookService: BookService) { }

    // add book 
    @Post("/book")
    createBook(): string
    {
        return this.bookService.addBook();
    }

    // get all book 
    @Get("/book")
    getAllBooks(): string
    {
        return this.bookService.getBook();
    }

    // update book by id
    @Put("/book/:id")
    updateBookById(@Param() params): string
    {
        console.log(params.id);
        return this.bookService.updateBook();
    }

    //Delete Book By Id
    @Delete("/book/:id")
    deleteBookById(@Param() params): string
    {
        console.log(params.id);
        return this.bookService.deleteBook();
    }


}
