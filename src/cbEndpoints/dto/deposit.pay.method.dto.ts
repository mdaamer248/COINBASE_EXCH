import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DepositFromPayMethodDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  profile_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  amount: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  payment_method_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  currency: string;
}
