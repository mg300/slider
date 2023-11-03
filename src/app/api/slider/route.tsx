import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import path from "path";

interface Idata {
  id: number;
  text: string;
  imageURL: string;
  audioURL: string;
}

export const GET = async (request: NextApiRequest, { params }: { params: { name: string } }) => {
  try {
    const FilePath = path.join(process.cwd(), "public");

    const text: string[] = ["Slide no. 1", "Slide no. 2", "Slide no. 3", "Slide no. 4"];
    let audioURLs: string[] = [];
    let imageURLs: string[] = [];
    let data: Idata[] = [];

    const files = await fs.promises.readdir(FilePath);

    for (const file of files) {
      const fileExtension = path.extname(file).toLowerCase();

      if (fileExtension === ".jpeg") {
        imageURLs.push(`${process.env.NEXT_PUBLIC_HOST}/api/slider/image/${file}`);
      } else if (fileExtension === ".mp3") {
        audioURLs.push(`${process.env.NEXT_PUBLIC_HOST}/api/slider/audio/${file}`);
      }
    }

    for (let i = 0; i < Math.min(text.length, audioURLs.length, imageURLs.length); i++) {
      const customItem: Idata = {
        id: i + 1,
        text: text[i],
        imageURL: imageURLs[i],
        audioURL: audioURLs[i],
      };
      data.push(customItem);
    }
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new NextResponse("Somtething went wrong", { status: 500 });
  }
};
