import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// aktifkan plugin
dayjs.extend(relativeTime)

export default function Item({manga}) {
	return(
		<div className="bg-white border border-gray-200 rounded-xl shadow-2xs sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
			<div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[8%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
			  <img className="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1709675577966-6231e5a2ac43?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Image" />
			</div>
			<div className="flex flex-wrap">
			  <div className="p-4 flex flex-col h-full sm:px-6 sm:py-1">
			    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
			      {manga.title}
			    </h3>
			    <p className="mt-1 text-gray-500 dark:text-neutral-400">
			    	{manga.synopsis}
			    </p>
			    <div className="mt-5 sm:mt-auto">
			      <p className="text-xs text-gray-500 dark:text-neutral-500">
			        Latest Chapter {manga.latestChapter} | {dayjs(manga.releasedAt).fromNow()}
			      </p>
			    </div>
			  </div>
			</div>
		</div>
	)	
}