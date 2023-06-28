import { IsEmail, IsString } from 'class-validator';

interface AccountData {
  name: string;
  email: string;
}

class AccountModelObject implements AccountData {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}

export { AccountModelObject, AccountData };
