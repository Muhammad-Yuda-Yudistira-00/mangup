"use client"

import ListGroup from "@/app/components/sidebar/ListGroup"
import {useDispatch,useSelector} from "react-redux"
import {fetchManga} from "@/lib/redux/slices/mangaSlice"
import {useEffect} from "react"

export default function Sidebar() {
  const dispatch = useDispatch()
  const {mostPopular, newManga, genres, isLoading, error} = useSelector(state => state.manga)

  useEffect(() => {
    dispatch(fetchManga({category: "most-popular"}))
    dispatch(fetchManga({category: "new-manga"}))
    dispatch(fetchManga({category: "genres"}))
  }, [dispatch])

	return (
		<aside className="w-3/12 pt-16">
		    {isLoading ? (<div>Loading.. </div>) : (
		      <ListGroup manga={mostPopular} category="manga" title="Most Poluler" />
		    )}
		    {isLoading ? (<div>Loading.. </div>) : (
		    	<ListGroup manga={newManga} category="manga" title="New Manga" />
		    )}
		    {isLoading ? (<div>Loading.. </div>) : (
		    	<ListGroup manga={genres} category="genre" title="Genres" />
		    )}
		</aside>
	)
}