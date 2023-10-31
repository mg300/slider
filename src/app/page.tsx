import Image from "next/image";
import PlayPause from "./components/control/PlayPause";
import SlideDots from "./components/control/SlideDots";

export default function Home() {
  return (
    <main>
      <PlayPause />
      <SlideDots />
    </main>
  );
}
