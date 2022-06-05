import { Test, TestingModule } from '@nestjs/testing';
import { MalController } from './mal.controller';
import { MalService } from './mal.service';

describe('MalController', () => {
  let controller: MalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MalController],
      providers: [MalService],
    }).compile();

    controller = module.get<MalController>(MalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
