import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateBoardDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'content',
    required: true,
    example: 'hello',
  })
  contents: string;
}
// export class UpdateBoardDto extends PartialType(CreateBoardDto) {};
// export class UpdateBoardDto extends PickType(CreateBoardDto, ['name']) {};
// export class UpdateBoardDto extends OmitType(CreateBoardDto, ['name']) {};
