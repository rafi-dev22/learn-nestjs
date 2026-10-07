import { Injectable } from '@nestjs/common';
import { DiscountDto } from './Dto/discount.dto.js';

@Injectable()
export class ShopService {
    calculatedDiscount(dto: DiscountDto){
        const discountammount = (dto.price * dto.discount) / 100
        const finalprice = dto.price - discountammount
        return {
      message: 'Discount Calculated Sukses Bos!!',
      data: {
        originalprice: dto.price,
        discountPersentage: dto.discount,
        discountamount: Number(discountammount),
        finalPrice: Number(finalprice),
      },
    };
    }
}
