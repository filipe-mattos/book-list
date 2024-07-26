import {Module} from "@nestjs/common";
import {BookService} from "./book.service";
import {BookController} from "./book.controller";
import {PrismaModule} from "../database/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    providers: [BookService],
    controllers: [BookController],
    exports: [BookModule]
})
export class BookModule {

}