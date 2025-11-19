import { config as conf } from "dotenv";

conf({
    path: "../../.env",
});

const _config: { [key: string]: string } = {
  PORT: process.env.PORT as string,
  MONGODB_URI: process.env.MONGODB_URI as string,
};

export const config = {
  get(key: string): string {
    const value = _config[key];

    if (!value) {
      console.log(`${key} not found, please provide valid key.`);
      process.exit();
    }
    return value;
  },
};
