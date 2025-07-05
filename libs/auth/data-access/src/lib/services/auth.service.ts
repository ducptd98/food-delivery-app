import {
  SALT_ROUND,
  TransactionManagerService,
} from '@food-delivery-app/common';
import { User } from '@food-delivery-app/prisma-user-service';
import {
  TAccessToken,
  TPrismaTransaction,
  TToken,
} from '@food-delivery-app/types';
import { UserService } from '@food-delivery-app/user-data-access';
import { BadRequestError, hashString } from '@food-delivery-app/utils';
import { Injectable } from '@nestjs/common';
import { JwtService } from './jwt.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UserService,
    private transactionManagerService: TransactionManagerService
  ) {}

  // public async login(input: TLoginSchema): Promise<TAccessToken> {
  //   const user = await this.usersService.findByEmail(input.email);
  //   if (!user) {
  //     throw new NotFoundError('user not found');
  //   }

  //   const isSamePassword = await validatePassword(
  //     input.password,
  //     user.password
  //   );
  //   if (!isSamePassword) {
  //     throw new BadRequestError('Password is not correct');
  //   }

  //   return this.generateToken(user);
  // }

  // public async loginByRefreshToken(
  //   input: TLoginByRefreshTokenSchema
  // ): Promise<{ accessToken: string; refreshToken: string }> {
  //   const jwtDecodedToken = this.jwtService.verifyToken(input.token, 'refresh');

  //   const user = await this.usersService.findById(Number(jwtDecodedToken.sub));
  //   if (!user) {
  //     throw new NotFoundError('user not found');
  //   }
  //   return await this.generateToken(user);
  // }

  public async register(request: any): Promise<TAccessToken> {
    let user = await this.usersService.findByEmail(request.email);
    if (user) {
      throw new BadRequestError('user exists');
    }
    const passwordHash = hashString(request.password, SALT_ROUND);

    const handler = async (client: TPrismaTransaction) => {
      // const baseUrl = this._environmentService.getKey(CommonConstants.WEB_APP_URL);
      // const verifyEmailUrl = this._environmentService.getKey(CommonConstants.VERIFY_EMAIL);
      // const url = new URL(verifyEmailUrl, baseUrl);
      // url.searchParams.append('email', input.email);
      // user = await this.usersService.createOne(
      //   {
      //     email: request.email,
      //     firstName: request.firstName,
      //     lastName: request.lastName,
      //     phoneNumber: request.phoneNumber,
      //     avatarUrl: null,
      //     password: passwordHash,
      //   },
      //   client
      // );
      // await Promise.all([
      //   this._accountsService.save({ passwordHash, userId: user.id }, manager),
      //   this._mailService.sendMail(
      //     EMAIL_SOURCE_TYPES.SIGNUP,
      //     { url, fullName: `${input.firstName} ${input.lastName}` || 'User' },
      //     {
      //       toEmail: input.email,
      //     },
      //   ),
      // ]);
    };
    await this.transactionManagerService.performActionInTransaction(
      'user',
      handler
    );
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload: TToken = {
      iss: '',
      sub: String(user.id),
      email: user.email,
    };
    const refreshToken = this.jwtService.signToken(payload, 'refresh');
    const accessToken = this.jwtService.signToken(payload, 'access');

    return {
      accessToken,
      refreshToken,
    };
  }
}
