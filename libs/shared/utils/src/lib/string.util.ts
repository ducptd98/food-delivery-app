import { genSaltSync, hashSync } from 'bcrypt';

export function transformActionToRoutingKey<T extends string>(
  type: string,
  action: T
) {
  const actionKey = action.toLowerCase().split('_').join('-');
  return `action.cmd.${actionKey}.gateway.${type.toLowerCase()}`;
}

export function parseAuthHeader(hdrValue: unknown) {
  const AUTHORIZATION_HEADER_REGEX = /(\S+)\s+(\S+)/;
  if (typeof hdrValue !== 'string') {
    return null;
  }
  const matches = hdrValue.match(AUTHORIZATION_HEADER_REGEX);
  return matches && { scheme: matches[1], value: matches[2] };
}

export function hashString(password: string, rounds: number): string {
  const salt = genSaltSync(rounds);
  return hashSync(password, salt);
}
