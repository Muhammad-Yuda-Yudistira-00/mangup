"use client"

import Image from "next/image"
import Item from "@/app/components/content/Item"
import Pagination from "@/app/components/content/Pagination"
import {useState, useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {fetchManga} from "@/lib/redux/slices/mangaSlice"
import {fetchUser} from "@/lib/redux/slices/authSlice"

export default function Home() {
  // const [seri, setSeri] = useState(0)
  const perPage = 15
  const totalItem = 153
  const dispatch = useDispatch()
  const {latestUpdates, isLoading, error} = useSelector(state => state.manga)

  useEffect(() => {
    dispatch(fetchManga({category: "latest-updates"}))
    const token = localStorage.getItem('token') || null
    if(token) {
      dispatch(fetchUser())
    }
  }, [dispatch])

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
      <div className="pt-6">
        <Pagination perPage={perPage} totalItem={totalItem} />
      </div>
    </div>
  );
}
