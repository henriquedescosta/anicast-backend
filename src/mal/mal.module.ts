import { Module } from '@nestjs/common';
import { MalService } from './mal.service';
import { MalController } from './mal.controller';

@Module({
  controllers: [MalController],
  providers: [MalService]
})
export class MalModule {}
