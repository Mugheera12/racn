import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProducts,
  addToCart,
  getMyCart,
  getProducts,
  removeFromCart,
} from "./productService";

// define initial State

let initialState = {
  products: [],
  productLoading: false,
  productError: false,
  productSuccess: false,
  productMessage: "",
  cart: [],
  cartLoading: false,
  cartSuccess: false,
  cartError: false,
  cartMessage: "",
};

// call the service funvction

export const addProductData = createAsyncThunk(
  "add-product",
  async (productData, thunkAPI) => {
    try {
      let token = thunkAPI.getState().auth.user.token;

      return await addProducts(productData, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const getProductData = createAsyncThunk(
  "get-products",
  async (_, thunkAPI) => {
    try {
      return await getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const addCartData = createAsyncThunk(
  "add-to-cart",
  async (product_id, thunkAPI) => {
    try {
      let token = thunkAPI.getState().auth.user.token;
      return await addToCart(product_id, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const removeCartData = createAsyncThunk(
  "remove-from-cart",
  async (product_id, thunkAPI) => {
    try {
      let token = thunkAPI.getState().auth.user.token;
      return await removeFromCart(product_id, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const getMyCartData = createAsyncThunk(
  "get-my-cart",
  async (_, thunkAPI) => {
    try {
      let token = thunkAPI.getState().auth.user.token;
      return await getMyCart(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
// create Slice

export const productSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    productReset: (state) => {
      state.productError = false;
      state.productSuccess = false;
      state.productLoading = false;
      state.productMessage = "";
    },
    cartReset: (state) => {
      state.cartError = false;
      state.cartSuccess = false;
      state.cartLoading = false;
      state.cartMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductData.pending, (state, action) => {
        state.productLoading = true;
      })
      .addCase(addProductData.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = true;
        state.productMessage = action.payload;
      })
      .addCase(addProductData.fulfilled, (state, action) => {
        state.productLoading = false;
        state.productSuccess = true;
        state.products.push(action.payload);
      })
      .addCase(getProductData.pending, (state, action) => {
        state.productLoading = true;
      })
      .addCase(getProductData.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = true;
        state.productMessage = action.payload;
      })
      .addCase(getProductData.fulfilled, (state, action) => {
        state.productLoading = false;
        state.productSuccess = true;
        state.products = action.payload;
      })
      .addCase(addCartData.pending, (state, action) => {
        state.cartLoading = true;
      })
      .addCase(addCartData.rejected, (state, action) => {
        state.cartLoading = false;
        state.cartError = true;
        state.cartMessage = action.payload;
      })
      .addCase(addCartData.fulfilled, (state, action) => {
        state.cartLoading = false;
        state.cartSuccess = true;
        state.cartMessage = action.payload;
        state.cart = action.payload;
      })
      .addCase(removeCartData.pending, (state, action) => {
        state.cartLoading = true;
      })
      .addCase(removeCartData.rejected, (state, action) => {
        state.cartLoading = false;
        state.cartError = true;
        state.cartMessage = action.payload;
      })
      .addCase(removeCartData.fulfilled, (state, action) => {
        state.cartLoading = false;
        state.cartSuccess = true;
        state.cartMessage = action.payload;
        state.cart = action.payload.filter((item) => item.quantity > 0); // Remove items with 0 quantity
      })

      .addCase(getMyCartData.pending, (state, action) => {
        state.cartLoading = true;
      })
      .addCase(getMyCartData.rejected, (state, action) => {
        state.cartLoading = false;
        state.cartError = true;
        state.cartMessage = action.payload;
      })
      .addCase(getMyCartData.fulfilled, (state, action) => {
        state.cartLoading = false;
        state.cartSuccess = true;
        state.cartMessage = action.payload;
        state.cart = action.payload;
      });
  },
});

export const { productReset, cartReset } = productSlice.actions;
export default productSlice.reducer;
