import { Module } from '@nestjs/common';
import { BookService } from './book.service';

@Module({
    imports: [],
    controllers: [],
    providers: [BookService],
})
export class BookModule { }