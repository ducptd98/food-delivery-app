import { Module } from '@nestjs/common';
import { TransactionManagerService } from './services/transaction-manager.service';

@Module({
  providers: [TransactionManagerService],
  exports: [TransactionManagerService],
})
export class TransactionModule {}
