import dotenv from 'dotenv';
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

export const config = {
  port: parseInt(required('PORT', 4000)),
  cors: {
    origin: required('CORS_ALLOW_ORIGIN'),
    credentials: true,
  },
  db: {
    url: required('DB_URL'),
  },
};
