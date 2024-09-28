import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOgrnizationDto } from './dto/create-ogrnization.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ogrnization } from './entities/ogrnization.entity';
import { Repository } from 'typeorm';
import { UpdateOgrnizationDto } from './dto/update-ogrnization.dto';

@Injectable()
export class OgrnizationService {
  constructor(
    @InjectRepository(Ogrnization)
    private organizationRepository: Repository<Ogrnization>,
  ) {}

  async create(createOgrnizationDto: CreateOgrnizationDto) {
    try {
      const organizationData =
        this.organizationRepository.create(createOgrnizationDto);
      return await this.organizationRepository.save(organizationData);
    } catch (error) {
      throw new BadRequestException(
        'Failed to create Organization: ' + error.message,
      );
    }
  }

  async update(updateOgrnizationDto: UpdateOgrnizationDto) {
    const { id, ...updateData } = updateOgrnizationDto;
    const organization = await this.organizationRepository.findOne({
      where: { id },
    });

    if (!organization) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }

    Object.assign(organization, updateData);
    return this.organizationRepository.save(organization);
  }

  findAll() {
    return this.organizationRepository.find({});
  }

  async findOne(id: number) {
    const organization = await this.organizationRepository.findOne({
      where: { id },
    });
    if (!organization) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
    return organization;
  }

  async remove(id: number) {
    const result = await this.organizationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
    return { message: `Organization with ID ${id} deleted successfully` };
  }
}
