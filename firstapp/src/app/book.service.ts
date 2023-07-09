import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService
{
    addBook(): string
    {
        return "this will add a new book"
    }
    getBook(): string
    {
        return "this will get all book book"
    }
    updateBook(): string
    {
        return "this will update the book"
    }
    deleteBook(): string
    {
        return "this will delete book"
    }
}