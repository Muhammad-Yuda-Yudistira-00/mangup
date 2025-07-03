"use client"

import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from "react"
import {searchManga} from "@/lib/redux/slices/mangaSlice"

export default function AllManga() {
	const dispatch = useDispatch()
	const {mangaSearch} = useSelector(state => state.manga)

	useEffect(() => {
		dispatch(searchManga({q: 'naruto'}))
	}, [dispatch])

	return(
		<div className="py-8 px-16 w-full min-h-screen">
			<h1 className="text-center text-6xl pb-8">Search Manga</h1>
			<div className="flex flex-wrap justify-center gap-y-4">
				<div className="w-1/4">
				  <div>
				    <label htmlFor="hs-trailing-button-add-on-with-icon" className="sr-only">Label</label>
				    <div className="flex rounded-lg">
				      <input type="text" id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-s-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
				      <button type="button" className="size-11.5 shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
				        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				          <circle cx="11" cy="11" r="8"></circle>
				          <path d="m21 21-4.3-4.3"></path>
				        </svg>
				      </button>
				    </div>
				  </div>

				  <div className="max-w-xs flex flex-col pt-8">
				 	{mangaSearch && mangaSearch.map((item, index) => (
					  <a key={index} className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:text-blue-600 focus:z-10 focus:outline-hidden focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:text-white dark:hover:text-blue-600" href={item.url} target="_blank">
					   	{item.title}
					  </a>
				 	))}
					</div>
				</div>
			</div>
		</div>
	)
}