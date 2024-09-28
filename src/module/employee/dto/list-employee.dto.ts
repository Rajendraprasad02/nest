import { IsString } from 'class-validator';

export class ListEmployee {
  @IsString()
  firstName: string;
  @IsString()
  organizationId: number;
}
