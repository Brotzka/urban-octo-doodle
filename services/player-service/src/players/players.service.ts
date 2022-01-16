import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { EntityManager, UpdateResult } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {
  constructor(
    @InjectEntityManager()
    private entityManager: EntityManager,
  ) {}

  findAll(): Promise<Player[]> {
    return this.entityManager.find(Player);
  }

  findOne(id: number): Promise<Player> {
    return this.entityManager.findOne(Player, id);
  }

  async delete(id: number): Promise<void> {
    await this.entityManager.delete(Player, id);
  }

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const newPlayer = this.entityManager.create(Player, createPlayerDto);
    return await this.entityManager.save(newPlayer);
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    const player = await this.entityManager.findOne(Player, id);
    Object.assign(player, updatePlayerDto);
    return await this.entityManager.save(Player, player);
  }
}
