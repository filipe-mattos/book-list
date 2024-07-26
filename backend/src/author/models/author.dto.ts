import {IsNumber, IsString} from "class-validator";

export class AuthorDTO {
    @IsString()
    name: string;

    @IsNumber()
    age: number;
}