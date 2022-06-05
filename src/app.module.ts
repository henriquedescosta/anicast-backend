import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MalModule } from './mal/mal.module';

@Module({
  imports: [MalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
