import { TToken } from '@food-delivery-app/types';
import { env } from '@food-delivery-app/utils';
import { Injectable } from '@nestjs/common';
import {
  JsonWebTokenError,
  sign,
  SignOptions,
  verify,
  VerifyOptions,
} from 'jsonwebtoken';

@Injectable()
export class JwtService {
  public signToken(
    payload: TToken,
    type: 'refresh' | 'access',
    signOptions?: SignOptions
  ): string {
    const secret =
      type === 'access' ? env.JWT_SECRET_KEY : env.REFRESH_TOKEN_SECRET;
    const expiresIn =
      type === 'access' ? env.JWT_EXPIRE_IN : env.REFRESH_TOKEN_EXPIRE_IN;
    return sign(payload, secret, {
      expiresIn: expiresIn as any,
      ...(signOptions || {}),
    });
  }

  public verifyToken(
    token: string,
    type: 'refresh' | 'access',
    signOptions?: VerifyOptions
  ): TToken {
    const secret =
      type === 'access' ? env.JWT_SECRET_KEY : env.REFRESH_TOKEN_SECRET;
    const expiresIn =
      type === 'access' ? env.JWT_EXPIRE_IN : env.REFRESH_TOKEN_EXPIRE_IN;
    try {
      const decodedToken = verify(token, secret, {
        ...(signOptions || {}),
      });
      if (typeof decodedToken === 'string') {
        throw new Error('Unauthorized');
      }
      return {
        iss: decodedToken.payload.iss!,
        sub: decodedToken.payload.sub!,
        email: decodedToken.payload['email'],
      };
    } catch (e) {
      const error = e as JsonWebTokenError;
      console.log('-> Line 27: error', error);
      throw new Error('Unauthorized');
    }
  }
}
