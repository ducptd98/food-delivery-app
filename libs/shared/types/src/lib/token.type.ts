export type TToken = {
  iss: string;
  sub: string;
  email: string;
};

export type TAccessToken = {
  accessToken: string;
  refreshToken: string;
};
