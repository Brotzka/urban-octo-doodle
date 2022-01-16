import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

@Entity({ name: 'players' })
export class Player {
  readonly saltOrRounds = 10;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  email: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime',
  })
  created_at: 'datetime';

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'datetime',
  })
  updated_at: 'datetime';

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, this.saltOrRounds);
  }
}
