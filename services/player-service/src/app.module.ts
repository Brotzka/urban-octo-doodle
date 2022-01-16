import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PlayersModule, TypeOrmModule.forRoot()],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
