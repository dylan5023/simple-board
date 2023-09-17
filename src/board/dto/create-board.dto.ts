import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateBoardDto {
  @MinLength(2)
  @MaxLength(20)
  @IsNotEmpty()
  @ApiProperty({
    description: 'name',
    required: true,
    example: 'Dylan',
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'contents',
    required: true,
    example: 'hi',
  })
  contents: string;
}
