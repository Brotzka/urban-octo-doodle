import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePlayersTable1642155470564 implements MigrationInterface {
    name = 'CreatePlayersTable1642155470564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`players\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_0ba988c87a279b5067d273c592\` (\`username\`), UNIQUE INDEX \`IDX_3abeb86b19703d782f0beff84c\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_3abeb86b19703d782f0beff84c\` ON \`players\``);
        await queryRunner.query(`DROP INDEX \`IDX_0ba988c87a279b5067d273c592\` ON \`players\``);
        await queryRunner.query(`DROP TABLE \`players\``);
    }

}
