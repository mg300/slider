import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export const GET = async (request: NextApiRequest, { params }: { params: { name: string } }) => {
  const { name } = params;
  const imagePath = path.join(process.cwd(), "public", name);
  const audioFile = fs.readFileSync(imagePath);
  return new Response(audioFile, { headers: { "content-type": "image/jpeg" } });
};
