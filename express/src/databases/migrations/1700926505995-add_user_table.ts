import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddUserTable1700926505995 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
