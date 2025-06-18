export default function Settings() {
	const dataProfile = {
		nickname: 'yudi',
		email: 'yudi@gmail.com',
		password: 'password',
	}
	return (
		<div className="p-8">
			<h1 className="text-4xl text-center pb-12">Edit Profiles</h1>
			<div className="flex flex-col items-center w-full gap-4">
				<span className="inline-flex items-center justify-center size-28 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500 mb-8">
				  AC
				</span>
				<div className="max-w-lg w-full">
				  <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">Nickname</label>
				  <input type="email" id="input-label" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="yudistira" value={dataProfile.nickname} />
				</div>
				<div className="max-w-lg w-full">
				  <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">Email</label>
				  <input type="email" id="input-label" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="you@site.com" value={dataProfile.email} />
				</div>
				<div className="max-w-lg w-full">
				  <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">password</label>
				  <input type="password" id="input-label" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="password" value={dataProfile.password} />
				</div>
			</div>
		</div>
	)
}