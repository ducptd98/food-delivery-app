import { cleanEnv, str } from 'envalid';

export const env = cleanEnv(process.env, {
  JWT_SECRET_KEY: str(),
  JWT_EXPIRE_IN: str(),
  REFRESH_TOKEN_SECRET: str(),
  REFRESH_TOKEN_EXPIRE_IN: str(),
  CLOUDINARY_CLOUD_NAME: str(),
  CLOUDINARY_API_KEY: str(),
  CLOUDINARY_API_SECRET: str(),
  CLOUDINARY_FOLDER: str(),
  RABBITMQ_ERLANG_COOKIE: str(),
  RABBITMQ_DEFAULT_VHOST: str(),
  RABBITMQ_DEFAULT_USER: str(),
  RABBITMQ_DEFAULT_PASS: str(),
  RABBITMQ_HOST: str(),
  RABBITMQ_PORT: str(),
});
