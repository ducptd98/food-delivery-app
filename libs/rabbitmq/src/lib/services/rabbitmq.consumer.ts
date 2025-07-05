import { Injectable } from '@nestjs/common';
import { RabbitSubscribeWithHandler } from '../decorators';

@Injectable()
export class RabbitmqConsumer {
  //* receive message from RingCentral
  @RabbitSubscribeWithHandler({
    exchange: 'user_service.category',
    routingKey: 'action.cmd.find-all-and-count.gateway.user',
    queue: 'user_service.user-action.cmd.find-all.gateway.user',
    queueOptions: {
      deadLetterExchange: 'user_service.dlx_user_service',
      deadLetterRoutingKey: `dlx.log`,
    },
  })
  public async findAllAndCount(action: any) {
    console.log(`-> RabbitmqConsumer message`, action);
  }

  //* update message from RingCentral

  // @RabbitRPC({
  //   exchange: 'team_name.project_name',
  //   routingKey: 'schedule_message.cmd.run.scheduler.backend',
  //   queue: 'team_name.project_name-schedule_message.cmd.run.scheduler.backend',
  //   queueOptions: {
  //     deadLetterExchange: 'phpswteam.dlx_php_text_message',
  //     deadLetterRoutingKey: `dlx.log`,
  //   },
  // })
  // public async runScheduleMessage(data) {
  //   console.log(`-> data`, data);
  //   // try {
  //   //   return await this._scheduleMessageService.runScheduleMessage(
  //   //     data.request.scheduleMessageId,
  //   //   );
  //   // } catch (error) {
  //   //   return new Nack();
  //   // }
  // }
}
