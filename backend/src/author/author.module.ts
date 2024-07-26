import {Module} from "@nestjs/common";
import {AuthorService} from "./author.service";
import {AuthorController} from "./author.controller";
import {PrismaService} from "../database/prisma/prisma.service";
import {PrismaModule} from "../database/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    providers: [AuthorService],
    controllers: [AuthorController],
    exports: [AuthorModule]
})
export class AuthorModule {

}