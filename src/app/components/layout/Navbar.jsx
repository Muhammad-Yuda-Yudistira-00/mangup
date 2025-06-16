import Button from "@/app/components/layout/Button"

export default function Navbar() {
	const brand = "Mangap"
	return (
		<header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
		  <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
		    <a class="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white" href="/" aria-label="Brand">{brand}</a>
		    <div class="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
		      <a class="font-medium text-blue-500 focus:outline-hidden" href="/" aria-current="page">Home</a>
		      <a class="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Wacth List</a>
		      <a class="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Search</a>
		      <a class="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">settings</a>
		      <Button />
		    </div>
		  </nav>
		</header>
	)
}