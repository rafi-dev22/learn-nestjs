import { Injectable } from '@nestjs/common';
import { GradeDto } from './dto/grade.dto.js';

@Injectable()
export class AcademicService {
    calculatedGrade(dto :GradeDto ) {
        const {score} = dto 
        let grade = 'E'

        if(score >= 85){
            grade = 'A'
        }else if(score >= 75){
            grade = 'B'
        }else if(score >= 60){
            grade = 'C'
        }else if(score >= 50){
            grade = 'D'
        }
            return {
      message: 'Grade Suksess',
      data: {
        score,
        grade,
      },
    };
        }
    }

