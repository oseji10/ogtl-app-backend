import { MigrationInterface, QueryRunner } from "typeorm";
export declare class First1729086994827 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}