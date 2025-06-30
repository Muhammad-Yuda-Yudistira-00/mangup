import {configureStore} from "@reduxjs/toolkit"
import mangaReducer from "@/lib/redux/slices/mangaSlice"

export const store = configureStore({
	reducer: {
		manga: mangaReducer
	}
})

store.subscribe(() => {
	console.info('📦 Redux State:', store.getState())
})