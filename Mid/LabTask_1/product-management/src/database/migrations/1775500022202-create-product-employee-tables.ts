import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductEmployeeTables1775500022202 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    { name: "id", type: "uuid", isPrimary: true, generationStrategy: "uuid", default: "uuid_generate_v4()" },
                    { name: "name", type: "varchar", isNullable: false },
                    { name: "category", type: "varchar", isNullable: false },
                    { name: "price", type: "decimal", isNullable: false },
                    { name: "quantity", type: "int", isNullable: false }
                ],
            }),

         
        );
           

        await queryRunner.createTable(
            new Table({
                name: "employees",
                columns: [
                    { name: "id", type: "uuid", isPrimary: true, generationStrategy: "uuid", default: "uuid_generate_v4()" },
                    { name: "name", type: "varchar", isNullable: false },
                    { name: "email", type: "varchar", isNullable: false },
                    { name: "phone", type: "varchar", isNullable: false },
                    { name: "password", type: "varchar", isNullable: false },
                    { name: "age", type: "int", isNullable: false },
                    { name: "yearsOfWorking", type: "int", isNullable: false }
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("employees");
        await queryRunner.dropTable("products");
    }
}