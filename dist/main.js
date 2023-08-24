"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function start() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const PORT = process.env.PORT;
        const config = new swagger_1.DocumentBuilder()
            .setTitle('FERMA')
            .setDescription('A project named FERMA, It helps to systematize a ferma')
            .setVersion('1.0')
            .addTag('NestJS, MongoDB, Sequelize')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api/docs', app, document);
        app.use(cookieParser());
        app.setGlobalPrefix('api');
        app.useGlobalPipes(new common_1.ValidationPipe());
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
start();
//# sourceMappingURL=main.js.map