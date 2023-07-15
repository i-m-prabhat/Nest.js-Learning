import { Body, Controller, Delete, Get, Post, Put, Param } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller("book")
export class BookController
{
    constructor(private bookService: BookService) { }

    @Get("/findAll")
    getAllBook(): Book[]
    {
        return this.bookService.findAllBook();
    }

    @Put('/create')
    updateBook(@Body() book: Book): string
    {
        return this.bookService.updateBookService(book);
    }

    @Delete('/delete/:id')
    deleteBook(@Param("id") bookId: string): string
    {
        return this.bookService.deleteBookService(bookId);
    }

    @Post('/add')
    addBook(@Body() book: Book): string
    {
        return this.bookService.addBookService(book);
    }


}