"use client"

import Button from "@/app/components/layout/Button"
import {useSearchParams} from "next/navigation"
import {usePathname} from "next/navigation"
import { Dropdown, DropdownItem } from "flowbite-react";

export default function Navbar() {
	const brand = "Mangap"
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const isLogin = searchParams.get("login")

	return (
		<header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
		      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
		    <div className="flex items-center justify-between">
		      <a className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80" href="/" aria-label="Brand">
		        MangAp
		      </a>
		      <div className="sm:hidden">
		        <button type="button" className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
		          <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
		          <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
		          <span className="sr-only">Toggle navigation</span>
		        </button>
		      </div>
		    </div>
		    <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
		      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
		        <a className={pathname === '/' ? "font-medium text-blue-500 focus:outline-hidden" : "font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"} href="/" aria-current="page">Home</a>
		        <a className={pathname === '/all-manga' ? "font-medium text-blue-500 focus:outline-hidden" : "font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"} href="/all-manga">Search</a>
		        {!isLogin ? (
		        	<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-500 text-gray-500 hover:border-gray-800 hover:text-gray-800 focus:outline-hidden focus:border-gray-800 focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:border-neutral-300">
							  Login
							</button>
		        ): (
		         <Dropdown label="Profile" inline className="font-medium text-netral-400 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">
				      <DropdownItem href="/profile/watchlist?login=true" className={pathname === "/profile/watchlist" ? "text-blue-500" : ""}>Watchlist</DropdownItem>
				      <DropdownItem href="/profile/favourite?login=true" className={pathname === "/profile/favourite" ? "text-blue-500" : ""}>My Favourite</DropdownItem>
				      <DropdownItem href="/profile/settings?login=true" className={pathname === "/profile/settings" ? "text-blue-500" : ""}>Settings</DropdownItem>
				      <DropdownItem href="/">Logout</DropdownItem>
				    </Dropdown>
		        )}
		      </div>
		    </div>
		  </nav>
		</header>
	)
}


