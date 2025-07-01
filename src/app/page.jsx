"use client"

import Image from "next/image"
import Item from "@/app/components/content/Item"
import Pagination from "@/app/components/content/Pagination"
import ListGroup from "@/app/components/sidebar/ListGroup"
import {useState, useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {fetchManga} from "@/lib/redux/slices/mangaSlice"

export default function Home() {
  const [seri, setSeri] = useState(0)
  const perPage = 15
  const totalItem = 153
  const dispatch = useDispatch()
  const {latestUpdates, mostPopular, newManga, genres, isLoading, error} = useSelector(state => state.manga)

  useEffect(() => {
    setSeri(200)
  }, [])

  useEffect(() => {
    dispatch(fetchManga("latest-updates"))
    dispatch(fetchManga("most-popular"))
    dispatch(fetchManga("new-manga"))
    dispatch(fetchManga("genres"))
  }, [dispatch])
  return (
    <>
    <div className="px-12 pt-12 pb-20 m-auto min-h-screen w-full bg-neutral-200 dark:bg-yellow-800 min-h-full">
      <div className="flex gap-8">
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
        <aside className="w-3/12 pt-16">
          {isLoading ? (<div>Loading.. </div>) : (
            <ListGroup manga={mostPopular} category="manga" title="Most Poluler" />
          )}
          <ListGroup manga={newManga} category="manga" title="New Manga" />
          <ListGroup manga={genres} category="genre" title="Genre" />
        </aside>
      </div>
    </div>
    </>
  );
}
