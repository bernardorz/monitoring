import { Body, Controller, Post } from '@nestjs/common';
import { AccountModelObject } from '../model/account.model';
import { accountService } from '../service/account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly account: accountService) {}

  @Post()
  async addAccount(@Body() body: AccountModelObject) {
    const account = await this.account.create(body);
    return account;
  }
}
