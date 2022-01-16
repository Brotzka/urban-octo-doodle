import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayersService {
  constructor(
    @InjectEntityManager()
    private entityManager: EntityManager,
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  findAll(): Promise<Player[]> {
    return this.entityManager.find(Player);
  }

  findOne(id: number): Promise<Player> {
    return this.playerRepository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.entityManager.delete(Player, id);
  }

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const newPlayer = this.entityManager.create(Player, createPlayerDto);
    return await this.entityManager.save(newPlayer);
  }
}
