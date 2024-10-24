import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Second1729087165215 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
