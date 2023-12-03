import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddUserTable1700926505995 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
            length: '255'
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
            length: '255'
          },
          {
            name: 'first_name',
            type: 'varchar',
            isNullable: true,
            length: '255'
          },
          {
            name: 'last_name',
            type: 'varchar',
            isNullable: true,
            length: '255'
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: true,
            length: '11'
          },
          {
            name: 'birth_day',
            type: 'DATE',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: true,
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true
          }
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
