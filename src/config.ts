import 'dotenv/config';

const { PORT = 4000 } = process.env;

export const config = {
  port: PORT,
};
