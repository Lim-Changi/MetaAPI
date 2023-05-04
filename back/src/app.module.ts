import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { HealthCheckController } from './HealthCheck/HealthCheckController';
import { TerminusModule } from '@nestjs/terminus';
import { ValidationSchema } from '@app/common/config/validationSchema';
import { LoggingModule } from '@app/common/logging/logging.module';
import { UserApiModule } from './User/user.api.module';
import { SwaggerResponseController } from './SwaggerCommon/swagger.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: ValidationSchema,
    }),
    UserApiModule,
    HttpModule,
    TerminusModule,
    LoggingModule,
  ],
  controllers: [HealthCheckController, SwaggerResponseController],
})
export class AppModule {}
