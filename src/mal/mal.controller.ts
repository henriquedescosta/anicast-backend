import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MalService } from './mal.service';
import { CreateMalDto } from './dto/create-mal.dto';
import { UpdateMalDto } from './dto/update-mal.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('mal')
@Controller('mal')
export class MalController {
  constructor(private readonly malService: MalService) {}
  @Post()
  create(@Body() createMalDto: CreateMalDto) {
    return this.malService.create(createMalDto);
  }

  @Get()
  findAll() {
    return this.malService.findAll();
  }

  @Get('/oauth/authorize')
  oAuth() {
    return this.malService.authorize();
  }
  @Get('/oauth/callback')
  oAuthCallback(@Query('code') code) {
    return this.malService.callback(code);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.malService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMalDto: UpdateMalDto) {
    return this.malService.update(+id, updateMalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.malService.remove(+id);
  }
}
