import { Body, Controller, Post } from '@nestjs/common';
import { HealthService } from './health.service.js';
import { BmiDto } from './dto/bmi.dto.js';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Post('Bmi')
  getBmi(@Body() dto: BmiDto){
    return this.healthService.calculatedBmi(dto)
  }
}
