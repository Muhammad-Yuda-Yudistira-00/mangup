"use client"

import Image from "next/image"
import Item from "@/app/components/content/Item"
import {useSelector} from "react-redux"
import {fetchUser} from "@/lib/redux/slices/authSlice"

export default function Home() {
  const {latestUpdates, isLoading, error} = useSelector(state => state.manga)

  return (
    <div className="w-9/12">
      <div className="pb-4 flex justify-between items-end">
        <h1 className="text-5xl">Latest Manga Updates</h1>
        <p>Total Items: {latestUpdates.length}</p>
      </div>
      {isLoading ? (<div>Loading..</div>) : (
        <div className="flex flex-col gap-2">
          {latestUpdates.map((mangaUpdate, i) => (
            <Item key={i} manga={mangaUpdate} number={i + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
