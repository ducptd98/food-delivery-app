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
});
