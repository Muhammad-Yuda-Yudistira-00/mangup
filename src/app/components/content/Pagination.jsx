import {useState} from "react"

export default function Pagination({perPage, totalItem}) {
	const totalPage = Math.ceil(totalItem / perPage)
	const [currentPage, setCurrentPage] = useState(1)

	return (
		<nav className="flex items-center justify-center gap-x-1" aria-label="Pagination">
		  <button type="button" className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Previous" disabled={currentPage === 1} >
		    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		      <path d="m15 18-6-6 6-6"></path>
		    </svg>
		  </button>
		  <div className="flex items-center gap-x-1">
		    {[...Array(totalPage)].map((_,i) => {
		    	return i + 1 === currentPage ? (
		    		<button type="button" key={i} class="min-h-9.5 min-w-9.5 flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500" aria-current="page">{i + 1}</button>
		    	) : (
		    		<button type="button" key={i} className="min-h-9.5 min-w-9.5 flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">{i + 1}</button>
		    	)
		    })}
		  </div>
		  <button type="button" className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Next" disabled={currentPage === totalPage} >
		    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		      <path d="m9 18 6-6-6-6"></path>
		    </svg>
		  </button>
		</nav>
	)
}