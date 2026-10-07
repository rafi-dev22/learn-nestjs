import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";


export class BmiDto {
    @IsNotEmpty ()
    @IsNumber()
    @IsPositive()
    weight: number;
    

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    height: number;
}