/**
 * DTO (Data Transfer Objhect)
 * fungsi: mendefinisikan request data yg dibutuhkan
 */

import { IsNotEmpty, IsNumber, IsPositive, Min } from "class-validator";

export class CircleDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @IsPositive()
    radius!: number
    /**"!" buat data yg wajib ada ketika request itu terjadi */
}