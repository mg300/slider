import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export const GET = async (request: NextRequest, { params }: { params: { name: string } }) => {
  const { name } = params;
  const audioFilePath = path.join(process.cwd(), "public", name);
  const audioFile = fs.readFileSync(audioFilePath);
  return new NextResponse(audioFile, {
    headers: { "content-type": "audio/mp3", "Content-Length": String(audioFile.length) },
  });
};
