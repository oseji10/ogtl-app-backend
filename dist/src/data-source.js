"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || "2wsxzaQ1!",
    database: process.env.DB_DATABASE || 'ogtl',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    logging: true,
});
//# sourceMappingURL=data-source.js.map