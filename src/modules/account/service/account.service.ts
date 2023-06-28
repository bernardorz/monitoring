import { AccountData } from '../model/account.model';

export class accountService {
  async create(data: AccountData): Promise<AccountData> {
    return new Promise((resolve) => {
      resolve(data);
    });
  }
}
