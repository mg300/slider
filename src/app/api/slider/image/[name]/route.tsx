import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export const GET = async (request: NextRequest, { params }: { params: { name: string } }) => {
  const { name } = params;
  const imagePath = path.join(process.cwd(), "public", name);
  const audioFile = fs.readFileSync(imagePath);
  return new NextResponse(audioFile, { headers: { "content-type": "image/jpeg" } });
};
