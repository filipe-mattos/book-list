import {Injectable} from "@nestjs/common";
import {BookDto} from "./models/book.dto";

@Injectable()
export class BookService {

    async list(){
        return 'books list'
    }

    async create(book: BookDto){
        return 'book create'
    }

    async delete(id: number){
        return 'book deleted'
    }
}