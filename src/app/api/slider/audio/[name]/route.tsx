import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export const GET = async (request: NextApiRequest, { params }: { params: { name: string } }) => {
  const { name } = params;
  const audioFilePath = path.join(process.cwd(), "public", "name");
  const audioFile = fs.readFileSync(audioFilePath);
  return new Response(audioFile, {
    headers: { "content-type": "audio/mp3", "Content-Length": String(audioFile.length) },
  });
};
