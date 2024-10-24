"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Second1729087165215 = void 0;
class Second1729087165215 {
    constructor() {
        this.name = 'Second1729087165215';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "destinations" ("destinationID" uuid NOT NULL DEFAULT uuid_generate_v4(), "locationName" character varying NOT NULL, "status" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "fromLocationID" uuid, "toLocationID" uuid, "costCostId" uuid, CONSTRAINT "PK_502fde230854355a61db51b98c9" PRIMARY KEY ("destinationID"))`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD CONSTRAINT "FK_addfd899fdb7e5fe99ea26d288e" FOREIGN KEY ("fromLocationID") REFERENCES "locations"("locationID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD CONSTRAINT "FK_97e4bd85f8d325c63ddb9488c4b" FOREIGN KEY ("toLocationID") REFERENCES "locations"("locationID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD CONSTRAINT "FK_9a55ced19cb54b163b9570b9087" FOREIGN KEY ("costCostId") REFERENCES "destination_cost"("costId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "destinations" DROP CONSTRAINT "FK_9a55ced19cb54b163b9570b9087"`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP CONSTRAINT "FK_97e4bd85f8d325c63ddb9488c4b"`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP CONSTRAINT "FK_addfd899fdb7e5fe99ea26d288e"`);
        await queryRunner.query(`DROP TABLE "destinations"`);
    }
}
exports.Second1729087165215 = Second1729087165215;
//# sourceMappingURL=1729087165215-second.js.map