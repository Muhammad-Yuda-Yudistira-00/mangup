import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const fetchLogin = createAsyncThunk(
	"user/fetchLogin",
	async ({email, password}, {rejectWithValue}) => {
		try {
			const response = await fetch(apiUrl + "auth/login", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({email,password})
			})
			if(!response.ok) {
				const errorData = await response.json()
				throw new Error(errorData.message || "Something want wrong")
			}
			return await response.json()
		} catch (error) {
			return rejectWithValue(error.message || "Unknown Error")
		}
	}
)

export const fetchUser = createAsyncThunk(
	"user/fetchUser",
	async (_, {rejectWithValue}) => {
		try {
			const token = localStorage.getItem('token')
			const response = await fetch(apiUrl + "auth/me", {
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				}
			})
			if(!response.ok) {
				const result = await response.json()
				throw new Error(result.message || "Invalid token")
			}
			return await response.json()
		} catch(error) {
			return error(error.message)
		}
	}
)

const initialState = {
	user: {
		message: '',
		data: null
	},
	isLoading: false,
	error: null
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state) => {
			state.user = {message: '', data: null}
			state.error = null
			state.isLoading = false
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLogin.pending, (state) => {
				state.isLoading = true
				state.error = null
			})
			.addCase(fetchLogin.fulfilled, (state,action) => {
				state.user = action.payload
				state.isLoading = false
			})
			.addCase(fetchLogin.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
			.addCase(fetchUser.pending, (state) => {
				state.isLoading = true
				state.error = null
			})
			.addCase(fetchUser.fulfilled, (state,action) => {
				state.user = action.payload
				state.isLoading = false
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	}
})

export const {logout} = authSlice.actions
export default authSlice.reducer