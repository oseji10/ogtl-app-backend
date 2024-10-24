"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.First1729086994827 = void 0;
class First1729086994827 {
    constructor() {
        this.name = 'First1729086994827';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "buses" ("busId" uuid NOT NULL DEFAULT uuid_generate_v4(), "busName" character varying NOT NULL, "busCapacity" integer NOT NULL, "status" character varying DEFAULT 'active', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_65b69af1a5ec50fc4efae060806" PRIMARY KEY ("busId"))`);
        await queryRunner.query(`CREATE TABLE "locations" ("locationID" uuid NOT NULL DEFAULT uuid_generate_v4(), "locationName" character varying NOT NULL, "status" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_2bb32d86ccd1428d4eeb35cf489" PRIMARY KEY ("locationID"))`);
        await queryRunner.query(`CREATE TABLE "destination_cost" ("costId" uuid NOT NULL DEFAULT uuid_generate_v4(), "cost" integer NOT NULL, "discountCode" character varying NOT NULL, "status" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_0d4bc41487cce57996b76a06b0a" PRIMARY KEY ("costId"))`);
        await queryRunner.query(`CREATE TABLE "destinations" ("destinationID" uuid NOT NULL DEFAULT uuid_generate_v4(), "locationName" character varying NOT NULL, "status" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_502fde230854355a61db51b98c9" PRIMARY KEY ("destinationID"))`);
        await queryRunner.query(`CREATE TABLE "trips" ("tripID" uuid NOT NULL DEFAULT uuid_generate_v4(), "busName" character varying NOT NULL, "seat" integer NOT NULL, "date" TIMESTAMP NOT NULL, "time" character varying NOT NULL, "status" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_b024009fe027d16a820df52b1e3" PRIMARY KEY ("tripID"))`);
        await queryRunner.query(`CREATE TABLE "passengers" ("passengerID" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "otherNames" character varying NOT NULL, "phoneNumber" integer NOT NULL, "email" character varying NOT NULL, "address" character varying NOT NULL, "nextOfKinName" character varying NOT NULL, "nextOfKinAddress" character varying NOT NULL, "nextOfKinPhoneNumber" integer NOT NULL, "date" TIMESTAMP NOT NULL, "status" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_7594146d1688377a14a200e0a7f" PRIMARY KEY ("passengerID"))`);
        await queryRunner.query(`CREATE TABLE "drivers" ("driverId" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "dateOfBirth" TIMESTAMP NOT NULL, "phoneNumber" integer NOT NULL, "driversLicenceNumber" character varying NOT NULL, "status" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_cddc81d98d048e1f2cc19168302" PRIMARY KEY ("driverId"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "drivers"`);
        await queryRunner.query(`DROP TABLE "passengers"`);
        await queryRunner.query(`DROP TABLE "trips"`);
        await queryRunner.query(`DROP TABLE "destinations"`);
        await queryRunner.query(`DROP TABLE "destination_cost"`);
        await queryRunner.query(`DROP TABLE "locations"`);
        await queryRunner.query(`DROP TABLE "buses"`);
    }
}
exports.First1729086994827 = First1729086994827;
//# sourceMappingURL=1729086994827-first.js.map