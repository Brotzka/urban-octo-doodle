import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { IsNumberStringUrlValidator } from './validators/urls/isNumberString.url-validator';

@Controller('players')
export class PlayersController {
  constructor(private playerService: PlayersService) {}

  @Get()
  async findAll(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params: IsNumberStringUrlValidator) {
    return await this.playerService.findOne(params.id);
  }

  @Delete(':id')
  async delete(@Param() params: IsNumberStringUrlValidator) {
    await this.playerService.delete(params.id);
  }

  @Post()
  async create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Patch(':id')
  async update(
    @Param() params: IsNumberStringUrlValidator,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ) {
    return this.playerService.update(params.id, updatePlayerDto);
  }
}
