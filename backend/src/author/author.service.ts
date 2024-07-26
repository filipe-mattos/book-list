import {Injectable} from "@nestjs/common";
import {AuthorDTO} from "./models/author.dto";
import {PrismaService} from "../database/prisma/prisma.service";

@Injectable()
export class AuthorService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async list(){
        return this.prismaService.authors.findMany();
    }

    async create(author: AuthorDTO){
        return this.prismaService.authors.create({data: author});
    }

    async delete(id: number){
        return this.prismaService.authors.delete({where: {author_id: id}});
    }
}