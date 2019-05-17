import { Column, CreateDateColumn, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  // password: string;
  createdAt: string;
}

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({
    unique: true,
    nullable: false,
  })
  public email: string;

  @CreateDateColumn({
    type: 'datetime',
  })
  public createdAt: string;
}
