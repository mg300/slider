import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export const GET = async (request: NextApiRequest, { params }: { params: { name: string } }) => {
  const { name } = params;
  const audioFilePath = path.join(process.cwd(), "public", name);
  console.log(audioFilePath);
  const audioFile = fs.readFileSync(audioFilePath);

  return new Response(audioFile, { headers: { "content-type": "image/png" } });
};
