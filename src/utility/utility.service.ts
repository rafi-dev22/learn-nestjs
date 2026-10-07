import { Injectable } from '@nestjs/common';
import { TempereatureDto } from './dto/temp.dto.js';

@Injectable()
export class UtilityService {
    convertTemperatures(dto: TempereatureDto){
        const unitUpper = dto.unit.toUpperCase()
        let convertedTemp: number
        let targetunit: string

        if(unitUpper == 'C'){
            convertedTemp = (dto.temp*9) / 5 + 32
            targetunit = 'F'
        }else{
            convertedTemp = ((dto.temp - 32)*5) / 9
            targetunit = 'C'
        }
        return {
      message: 'Temperature convert successfully',
      data: {
        original: { temp: dto.temp, unit: unitUpper },
        converted: {
          temp: Number(convertedTemp.toFixed(2)),
          unit: targetunit,
        },
      },
    }
}
}
