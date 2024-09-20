import crypto from "crypto";
import prismaClientSingleton from "../src";
import dotenv from "dotenv";

dotenv.config();

const prisma = prismaClientSingleton(process.env.ACCELERATE_URL!);
