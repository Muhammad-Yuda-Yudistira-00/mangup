import {configureStore} from "@reduxjs/toolkit"
import mangaReducer from "@/lib/redux/slices/mangaSlice"
import authReducer from "@/lib/redux/slices/authSlice"

export const store = configureStore({
	reducer: {
		manga: mangaReducer,
		auth: authReducer
	}
})

store.subscribe(() => {
	console.info('📦 Redux State:', store.getState())
})