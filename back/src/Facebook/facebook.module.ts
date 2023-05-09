import { getWinstonLogger } from '@app/common/getWinstonLogger';
import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { FacebookController } from './facebook.controller';
import { FacebookService } from './facebook.service';

@Module({
    imports: [
        WinstonModule.forRoot(getWinstonLogger(process.env.NODE_ENV, 'Facebook')),
    ],
    controllers: [FacebookController],
    providers: [FacebookService],
    exports: [FacebookService],
})
export class FacebookModule {}
