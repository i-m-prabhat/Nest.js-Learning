import { Body, Controller, Get, Post, Put } from "@nestjs/common";
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

}