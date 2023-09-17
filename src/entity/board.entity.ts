import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ApiProperty({ description: 'user_id' })
  @Column()
  userId: number;

  @ApiProperty({ description: 'content' })
  @Column()
  contents: string;

  @ApiProperty({ description: 'update time' })
  @UpdateDateColumn()
  updateAt: Date;

  @ApiProperty({ description: 'create time' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'user information' })
  @ManyToOne(() => User) //user_id
  @JoinColumn({ name: 'userId' })
  user: User;
}
