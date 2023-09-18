import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBoardDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'author ID',
    required: true,
    example: '1',
  })
  userId: number;

  @IsNotEmpty()
  @ApiProperty({
    description: 'contents',
    required: true,
    example: 'hi',
  })
  contents: string;
}
