import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const fetchManga = createAsyncThunk(
	"manga/fetchManga",
	async (category, {rejectWithValue}) => {
		try {
			const response = await fetch(apiUrl + "/api/manga/" + category)
			if(!response.ok) throw Error(response.statusText)
			const result = await response.json()
			return {...result, category}
		} catch (error) {
			return rejectWithValue(error.message || "Unknown Error")
		}
	}
)

const initialState = {
	latestUpdates: [],
	mostPopular: [],
	newManga: [],
	genres: [],
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
	}
})

export default mangaSlice.reducer