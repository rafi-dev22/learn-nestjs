import { Body, Controller, Post } from '@nestjs/common';
import { UtilityService } from './utility.service.js';
import { TempereatureDto } from './dto/temp.dto.js';

@Controller('utility')
export class UtilityController {
  constructor(private readonly utilityService: UtilityService) {}

  @Post ('temp')
    convertTemp(@Body() dto: TempereatureDto){
      return this.utilityService.convertTemperatures(dto)
    }
}
