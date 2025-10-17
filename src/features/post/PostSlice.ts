import { createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";


type Post={
    userId:number;
    id:number;
    title:string;
    body:string;
}
type PostState={
    posts:Post[];
    loading:boolean;
    error?: string | null;
}

const initialState:PostState={
    posts:[],
    loading:false,
}

export const getPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
  "post/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    } catch (err: any) {
      const message = err?.response?.data?.message || err?.message || "Erreur réseau";
      return rejectWithValue(message);
    }
  }
);


const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPosts(state) {
      state.posts = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        console.log("rejected ....");
       
        state.error = (action.payload as string) ?? action.error?.message ?? "Erreur inconnue";
      });
  },
});

export default postSlice.reducer;