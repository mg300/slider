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

    const text: string[] = ["This is slide nr 1", "This is slide nr 2", "This is slide nr 3", "This is slide nr 4"];
    let audioURLs: string[] = [];
    let imageURLs: string[] = [];
    let data: Idata[] = [];

    fs.readdir(FilePath, (err, files) => {
      if (err) {
        console.error("Błąd odczytu folderu:", err);
        return;
      }

      files.forEach((file) => {
        const fileExtension = path.extname(file).toLowerCase();

        if (fileExtension === ".jpeg") {
          imageURLs.push(`https://localhost:3000/api/slider/${file}`);
        } else if (fileExtension === ".mp3") {
          audioURLs.push(`https://localhost:3000/api/slider/${file}`);
        }
      });
      for (let i = 0; i < Math.min(text.length, audioURLs.length, imageURLs.length); i++) {
        const customItem: Idata = {
          id: i + 1,
          text: text[i],
          imageURL: audioURLs[i],
          audioURL: imageURLs[i],
        };
        data.push(customItem);
      }
    });

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new NextResponse("Somtething went wrong", { status: 500 });
  }
};
