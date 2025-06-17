export default function Favourite() {
	const totalRanking = 10
	return (
		<div className="p-8">
			<h1 className="text-5xl text-center pb-12">My Favourite Manga (10) 👑</h1>
			<ul className="max-w-xs flex flex-col m-auto">
				{[...Array(totalRanking)].map((_, index) => (
				  <li key={index} className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
				    <span>{index + 1}.</span> Death Note
				  </li>
				))}
			</ul>
		</div>
	)
}