import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('/')
export class BookController
{
    // add book 
    @Post("/book")
    createBook(): string
    {
        return "This will create a new book";
    }

    // get all book 
    @Get("/book")
    getAllBooks(): string
    {
        return "This will show all book";
    }

    // update book by id
    @Put("/book/:id")
    updateBookById(@Param() params): string
    {
        console.log(params.id);
        return "This will update a specific book";
    }

    //Delete Book By Id
    @Delete("/book/:id")
    deleteBookById(@Param() params): string
    {
        console.log(params.id);
        return "This will delete a specif book"
    }


}
