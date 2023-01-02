import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class GenAddrDto{

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    account_id: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    profile_id: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    network: string;
}