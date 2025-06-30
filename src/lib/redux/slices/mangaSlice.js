import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const fetchLatestUpdates = createAsyncThunk(
	"manga/fetchLatestUpdates",
	async (_, {rejectWithValue}) => {
		try {
			const response = await fetch(apiUrl + "/api/manga/latest-updates")

			if(!response.ok) throw Error(response.statusText)

			return await response.json()
		} catch (error) {
			return rejectWithValue(error.message || "Unknown Error")
		}
	}
)

export const fetchMostPopular = createAsyncThunk(
	"manga/fetchMostPopular",
	async (_, {rejectWithValue}) => {
		try {

		} catch (error) {
			return rejectWithValue(error.message || "Unknown Error")
		}
	}
)


const initialState = {
	latestUpdates: [],
	mostPopular: [],
	infoMessage: null,
	isLoading: false,
	error: null
}

export const mangaSlice = createSlice({
	name: "manga",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchLatestUpdates.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchLatestUpdates.fulfilled, (state, action) => {
				state.latestUpdates = action.payload.data
				state.infoMessage = action.payload.message
				state.isLoading = false
			})
			.addCase(fetchLatestUpdates.rejected, (state, action) => {
				state.error = action.payload || action.error.message
				state.isLoading = false
			})
	}
})

export default mangaSlice.reducer