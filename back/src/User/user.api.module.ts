import { getWinstonLogger } from '@app/common/getWinstonLogger';
import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    WinstonModule.forRoot(getWinstonLogger(process.env.NODE_ENV, 'UserApi')),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserApiModule {}
