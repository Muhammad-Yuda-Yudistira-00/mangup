import Sidebar from "@/app/components/layout/Sidebar"

export default function MainLayout({children}) {
	return (
		<div className="px-12 pt-12 pb-20 m-auto min-h-screen w-full bg-neutral-200 dark:bg-yellow-800 min-h-full">
	        <div className="flex gap-8">

	          {children}
	          <Sidebar />

	        </div>
	    </div>
	)
}