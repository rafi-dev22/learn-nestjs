import { Injectable } from '@nestjs/common';
import { BmiDto } from './dto/bmi.dto.js';

@Injectable()
export class HealthService {
    calculatedBmi(dto: BmiDto){

        const heightinmeters = dto.height > 3 ? dto.height/100 : dto.height
        const bmi = dto.weight / (heightinmeters * heightinmeters)

        let status = ''
        if(bmi < 17.5) {
            status = "Underweight"
        } else if(bmi < 25) {
            status = "Normal weight"
        } else if(bmi < 30){
            status = "Overweight"
        } else{
            status = "Obesitas"
        }
        return {
      message: 'Kalkulasi BMI Sukses bos',
      data: {
        weight: dto.weight,
        height: dto.height,
        bmi: Number(bmi.toFixed(2)),
        status: status,
      }
    }
    }
}