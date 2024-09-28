import { IsString, IsOptional } from 'class-validator';

export class CreateOgrnizationDto {
  @IsString()
  organizationName: string;

  @IsString()
  organizationDistrict: string;

  @IsString()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  logo?: string;
}
