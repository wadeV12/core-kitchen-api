import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  // password: string;
  createdAt: string;
}

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public email: string;

  @Column({
    type: 'datetime',
  })
  public createdAt: string;
}
