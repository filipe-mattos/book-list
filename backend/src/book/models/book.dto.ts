import {IsNumber, IsString} from "class-validator";

export class BookDto {
    @IsString()
    title: string;

    @IsNumber()
    pageQty: number

    @IsNumber()
    author_id: number

}