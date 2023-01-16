import { Module } from '@nestjs/common';
import { MessagesService } from './message.service';
import { MessageGateway } from './message.gateway';

@Module({
  providers: [MessageGateway, MessagesService],
})
export class MessageModule {}
