import { Module } from '@nestjs/common';
import { AccountController } from './controller/account.controller';
import { accountService } from './service/account.service';

@Module({
  controllers: [AccountController],
  providers: [accountService],
})
export class AccountModule {}
