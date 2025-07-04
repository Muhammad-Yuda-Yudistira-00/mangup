import Link from "next/link"

export default function ListGroup({manga, category, title}) {
	return (
		<div className="pb-8">
			<h3 className="text-center text-2xl">{title}</h3>
			{category === "manga" ? (
				<div className="mt-3 flex flex-col">
					{manga && manga.map((item, index) => (
					  <a href={item.url} target="_blank" key={index} className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900">
					    <div className="flex items-center justify-between w-full">
					      <span>{item.title}</span>
					      <span>chapter: <a href={item.latestChapter.url} target="_blank" className="hover:underline">{item.latestChapter.title.trim().split(" ").pop()}</a></span>
					    </div>
					  </a>
					))}
				</div>
			) : (
				<div className="max-w-xs flex flex-col mt-3">
				{manga && manga.map((genre, index) => (
				  <Link href={`/${manga.slug}`} key={index} className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
				    {genre.name}
				  </Link>
				))}
				</div>
			)}
		</div>
	)
}
