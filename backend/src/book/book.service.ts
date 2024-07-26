import {Injectable} from "@nestjs/common";
import {BookDto} from "./models/book.dto";
import {PrismaService} from "../database/prisma/prisma.service";

@Injectable()
export class BookService {

    constructor(private readonly prismaService: PrismaService) {
    }

    async list(){
        return this.prismaService.books.findMany({
            include: {
                authors: true,
            }
        }
        );
    }

    async create({title, pageqty, author_id}: BookDto){
        return this.prismaService.books.create({data: {title,  pageqty, author_id}});
    }

    async delete(id: number){
        return this.prismaService.books.findMany();
    }
}