import { Injectable } from '@nestjs/common';
import { CreateMalDto } from './dto/create-mal.dto';
import { UpdateMalDto } from './dto/update-mal.dto';
import { Mal } from 'node-myanimelist';
import pkceChallenge from 'pkce-challenge';

@Injectable()
export class MalService {
  async create(createMalDto: CreateMalDto) {
    return 'This action adds a new mal';
  }

  findAll() {
    return `This action returns all mal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mal`;
  }

  update(id: number, updateMalDto: UpdateMalDto) {
    return `This action updates a #${id} mal`;
  }

  remove(id: number) {
    return `This action removes a #${id} mal`;
  }
  authorize() {
    // Offical way to login (recomended)
    const auth = Mal.auth('d3781163641e89ee03c3a38cea326006');

    const pkce = pkceChallenge(128);
    const url = auth.getOAuthUrl(pkce.code_challenge);

    return { url: url, code: pkce.code_challenge };
  }
  async callback(code) {
    const auth = await Mal.auth('d3781163641e89ee03c3a38cea326006');

    // Offical way to login (recomended)
    const acount = await auth.authorizeWithCode(
      code,
      'RWPAdn0xi7LfFielhEMH4CfG8tCysnC_UiJOAACcqGQ',
    );

    console.log(code);
    return acount;
  }
}
