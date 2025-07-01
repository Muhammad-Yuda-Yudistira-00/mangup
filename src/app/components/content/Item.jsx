import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// aktifkan plugin
dayjs.extend(relativeTime)

export default function Item({manga, number}) {
	return(
		<a href={manga.url} target="_blank" className="bg-white border border-gray-200 rounded-xl shadow-2xs sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 dark:hover:bg-red-700 relative">
			<span className="absolute right-0 bottom-0 p-2 text-sm text-neutral-400">{number}</span>
			<div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[8%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
			  <img className="size-full absolute top-0 start-0 object-cover" src={manga.thumb} alt={manga.title} />
			</div>
			<div className="flex flex-wrap">
			  <div className="p-4 flex flex-col h-full sm:px-6 sm:py-1">
			    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
			      {manga.title}
			    </h3>
			    <p className="mt-1 text-gray-500 dark:text-neutral-400">
			    	Description here..
			    </p>
			    <div className="mt-5 sm:mt-auto">
			      <p className="text-xs text-gray-500 dark:text-neutral-500">
			        Latest Chapter: <a href={manga.latestChapter.url} target="_blank" className="hover:underline">{manga.latestChapter.title.trim().split(" ").pop()}</a>
			        {/* | {dayjs(manga.releasedAt).fromNow()}*/}
			      </p>
			    </div>
			  </div>
			</div>
		</a>
	)	
}