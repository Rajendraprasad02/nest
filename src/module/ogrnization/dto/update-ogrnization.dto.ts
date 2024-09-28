import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateOgrnizationDto {
  @IsNotEmpty()
  @IsNumber()
  id: number; // Include id here

  @IsString()
  @IsOptional()
  organizationName: string;

  @IsString()
  @IsOptional()
  organizationDistrict: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  logo?: string;
}
