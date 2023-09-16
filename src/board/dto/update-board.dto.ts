import { IsOptional, MaxLength, MinLength } from 'class-validator';
import { CreateBoardDto } from './create-board.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBoardDto {
  @MinLength(2)
  @MaxLength(20)
  @IsOptional()
  name?: string;

  @IsOptional()
  contents?: string;
}
// export class UpdateBoardDto extends PartialType(CreateBoardDto) {};
// export class UpdateBoardDto extends PickType(CreateBoardDto, ['name']) {};
// export class UpdateBoardDto extends OmitType(CreateBoardDto, ['name']) {};
