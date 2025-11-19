import { createClient } from "redis";
import { config } from "./env.config";
import { logger } from "../utils/logger.utils";

export const redisclient = createClient({
  url: config.get("REDIS_URI"),
});

redisclient.on("error", (error) => logger.error("Redis Client Error", error));

export async function connectRedis() {
  try {
    await redisclient.connect();
  } catch (error) {
    logger.error("Error connecting to Redis", error);
    process.exit(1);
  }
}
