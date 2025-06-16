"use client"

import Image from "next/image"
import Item from "@/app/components/content/Item"
import Pagination from "@/app/components/content/Pagination"
import ListGroup from "@/app/components/sidebar/ListGroup"
import {useState, useEffect} from "react"
import mangaList from "@/app/data/mangaList"
import popularManga from "@/app/data/popularManga"
import newManga from "@/app/data/newManga"
import genreManga from "@/app/data/genreManga"

const yudiProfile = "https://my-profile-ten-kohl.vercel.app/"
const titikProfile = "https://github.com/titik444/"

export default function Home() {
  const [seri, setSeri] = useState(0)
  const perPage = 15
  const totalItem = 153

  useEffect(() => {
    setSeri(200)
  }, [])
  return (
    <>
    <div className="px-12 pt-12 pb-20 m-auto min-h-screen w-full bg-yellow-800">
      <div className="flex gap-8">
        <div className="w-9/12">
          <div className="pb-4 flex justify-between items-end">
            <h1 className="text-5xl">Latest Manga Updates</h1>
            <p>Total Items: {totalItem}</p>
          </div>
          <div className="flex flex-col gap-2">
            {[...Array(perPage)].map((_, i) => (
              <Item key={i} manga={mangaList[i]} />
            ))}
          </div>
          <div className="pt-6">
            <Pagination perPage={perPage} totalItem={totalItem} />
          </div>
        </div>
        <aside className="w-3/12 pt-16">
          <ListGroup manga={popularManga} category="manga" title="Most Poluler" />
          <ListGroup manga={newManga} category="manga" title="New Manga" />
          <ListGroup manga={genreManga} category="genre" title="Genre" />
        </aside>
      </div>
    </div>
    <footer className="h-24 w-full overflow-hidden bg-green-800 flex items-center justify-center">
      <p className="text-lg text-green-600 font-extralight uppercase">Created by <a href={yudiProfile} target="_blank" className="underline font-medium hover:text-black">Yudistira</a> & <a href={titikProfile} target="_blank" className="underline font-medium hover:text-black">Titik</a></p>
    </footer>
    </>
  );
}
