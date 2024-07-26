import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {BookDto} from "./models/book.dto";
import {ParamId} from "../shared/decorators/param-id.decorator";
import {BookService} from "./book.service";

@Controller('/book')
export class BookController {
    constructor(private readonly bookService: BookService) {
    }3

    @Get()
    async getBooks() {
        return this.bookService.list();
    }

    @Post()
    async saveBook(@Body() body: BookDto) {
        return this.bookService.create(body);
    }

    @Delete(':id')
    async deleteBook(@ParamId('id') id: number) {
        return this.bookService.delete(id);
    }
}