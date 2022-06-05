import { PartialType } from '@nestjs/mapped-types';
import { CreateMalDto } from './create-mal.dto';

export class UpdateMalDto extends PartialType(CreateMalDto) {}
