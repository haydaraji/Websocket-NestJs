import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserController } from './controller/user.controller';
import { AuthController } from './controller/auth.controller';
import { MessageModule } from './message/message.module';

@Module({
  imports: [AuthModule, UsersModule, MessageModule],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService],
})
export class AppModule {}
