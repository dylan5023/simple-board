import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from './board.entity';

@Entity()
export class User {
  // increasing automatically
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'userid', example: 'admin' })
  @Column({ unique: true })
  username: string;

  @ApiProperty({ description: 'password' })
  @Column({ select: false })
  password: string;

  @ApiProperty({ description: 'name' })
  @Column()
  name: string;

  @ApiProperty({ description: 'posting board' })
  @OneToMany(() => Board, (board) => board.user)
  boards?: Board[];
}