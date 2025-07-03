import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const fetchManga = createAsyncThunk(
	"manga/fetchManga",
	async ({category, paramGenre = null}, {rejectWithValue}) => {
		try {
			let response
			if(paramGenre) {
				response = await fetch(apiUrl  + category + "/" + paramGenre)
			} else {
				response = await fetch(apiUrl + "manga/" + category)
			}
			if(!response.ok) throw new Error(response.statusText)
			const result = await response.json()
			return {...result, category}
		} catch (error) {
			return rejectWithValue(error.message || "Unknown Error")
		}
	}
)

export const searchManga = createAsyncThunk(
	"manga/searchManga",
	async ({q, page = 1}, {rejectWithValue}) => {
		try {
			const response = await fetch(apiUrl + `manga/search?q=${q}&page=${page}`)
			if(!response.ok) {
				const resultError = await response.json()
				throw new Error(resultError.message)
			}
			return await response.json()
		} catch (error) {
			return error(error.message || "Unknown Error")
		}
	}
)

const initialState = {
	latestUpdates: [],
	mostPopular: [],
	newManga: [],
	genres: [],
	mangaSearch: null,
	pagination: null,
	infoMessage: null,
	isLoading: false,
	error: null
}

export const mangaSlice = createSlice({
	name: "manga",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchManga.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchManga.fulfilled, (state, action) => {
				switch(action.payload.category) {
					case "latest-updates":
					state.latestUpdates = action.payload.data
					break
					case "most-popular":
					state.mostPopular = action.payload.data
					break
					case "new-manga":
					state.newManga = action.payload.data
					break
					case "genres":
					state.genres = action.payload.data
					break
				}
				state.infoMessage = action.payload.message
				state.isLoading = false
			})
			.addCase(fetchManga.rejected, (state, action) => {
				state.error = action.payload || action.error.message
				state.isLoading = false
			})
			.addCase(searchManga.pending, (state) => {
				state.isLoading = true
			})
			.addCase(searchManga.fulfilled, (state,action) => {
				state.mangaSearch = action.payload.data
				state.infoMessage = action.payload.message
				state.pagination = action.payload.pagination
			})
			.addCase(searchManga.rejected, (state, action) => {
				state.error = action.payload || action.error.message
				state.isLoading = false
			})
	}
})

export default mangaSlice.reducer