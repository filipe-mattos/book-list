import {Body, Controller, Delete, Get, Post} from "@nestjs/common";
import {AuthorDTO} from "./models/author.dto";
import {ParamId} from "../shared/decorators/param-id.decorator";
import {AuthorService} from "./author.service";

@Controller('/author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {
    }

    @Get()
    async getAuthor() {
        return this.authorService.list();
    }

    @Post()
    async saveAuthor(@Body() body: AuthorDTO) {
        return this.authorService.create(body);
    }

    @Delete(':id')
    async deleteAuthor(@ParamId('id') id: number) {
        return this.authorService.delete(id);
    }
}