import { IsNotEmpty, IsNumber, Min, Max } from "class-validator";

export class DiscountDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100)
    discount!: number
}

