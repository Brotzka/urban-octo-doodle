import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

@Entity({ name: 'players' })
export class Player {
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

  private currentPassword: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      console.log('Password is set!');
      if (!(await bcrypt.compare(this.password, this.currentPassword))) {
        console.log('Password has changed!');
        this.password = await bcrypt.hash(this.password, 10);
      } else {
        console.log('Password has not changed!');
      }
    }
  }

  @AfterLoad()
  private loadCurrentPassword(): void {
    this.currentPassword = this.password;
  }
}
