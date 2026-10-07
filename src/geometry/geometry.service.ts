import { Injectable } from '@nestjs/common';
import { GeometryDTO } from './dto/geometry.dto.js';

@Injectable()
export class GeometryService {
    CircleArea(dto: GeometryDTO) {
        const radius = dto.radius
        const area = Math.PI * radius ** 2;
        return{
            message: "Circle area has been counted",
            area
        }
    }
}
