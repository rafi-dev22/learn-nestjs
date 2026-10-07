import { IsNotEmpty, IsNumber, IsIn } from "class-validator";

export class TempereatureDto{
    @IsNotEmpty()
    @IsNumber()
    temp!: number

    @IsNotEmpty()
    @IsIn(['C', 'F','c', 'f' ], {message: 'Unit harus C atau F' })
    unit!: string
}