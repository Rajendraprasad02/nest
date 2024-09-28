import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { OgrnizationService } from './ogrnization.service';
import { CreateOgrnizationDto } from './dto/create-ogrnization.dto';
import { UpdateOgrnizationDto } from './dto/update-ogrnization.dto';

@Controller('organization')
export class OgrnizationController {
  constructor(private readonly ogrnizationService: OgrnizationService) {}

  @Post('create')
  async create(@Body() createOgrnizationDto: CreateOgrnizationDto) {
    const organization =
      await this.ogrnizationService.create(createOgrnizationDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Organization created successfully',
      data: organization,
    };
  }
  @Post('update')
  async update(@Body() updateOgrnizationDto: UpdateOgrnizationDto) {
    const updatedOgranization =
      await this.ogrnizationService.update(updateOgrnizationDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Organization updated successfully',
      data: updatedOgranization,
    };
  }

  @Post('delete')
  async remove(@Body() body: { id: number }) {
    const { id } = body;
    const data = await this.ogrnizationService.remove(+id);
    return {
      // statusCode: HttpStatus.OK,
      // message: `Organization with ID ${id} deleted successfully`,
      data,
    };
  }

  @Get()
  async findAll() {
    const orgData = await this.ogrnizationService.findAll();
    return orgData.length ? orgData : { message: 'No data found' };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const organization = await this.ogrnizationService.findOne(+id);
    return organization
      ? organization
      : { meaasage: `Organization with ID ${id} not found` };
  }
}
