import { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../prismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) =>
  res.json(await prismaClient.user.findMany());
