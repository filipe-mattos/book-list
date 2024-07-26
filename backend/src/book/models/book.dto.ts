import {IsNumber, IsString} from "class-validator";

export class BookDto {
    @IsString()
    title: string;

    @IsNumber()
    pageqty: number

    @IsNumber()
    author_id: number

}