import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CBEModule } from './cbEndpoints/cbe.module';

@Module({
  imports: [ConfigModule.forRoot({envFilePath: '.development.env', isGlobal: true}), CBEModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
