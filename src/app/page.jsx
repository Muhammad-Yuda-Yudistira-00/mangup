import Image from "next/image"
import Item from "@/app/components/content/Item"

export default function Home() {
  return (
    <>
    <div className="px-12 pt-6 pb-20 m-auto min-h-screen w-full bg-yellow-800">
      <div>
        <div className="pb-4 flex justify-between items-end">
          <h1 className="text-6xl">Manga Updated New Chapters</h1>
          <p>Total Items: 150</p>
        </div>
        <div className="flex flex-col gap-2">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </div>
    </div>
    <footer className="h-24 w-full overflow-hidden bg-green-800 flex items-center justify-center">
      <p className="text-lg text-green-600 font-extralight uppercase">Created by <a href="#" className="underline font-medium hover:text-black">Yudistira</a> & <a href="#" className="underline font-medium hover:text-black">Titik</a></p>
    </footer>
    </>
  );
}
