import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'birth_day' })
  birthDay: Date;

  @Column({ name: 'created_ at' })
  createdAt: Date;

  @Column({ name: 'deleted_at' })
  deletedAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
