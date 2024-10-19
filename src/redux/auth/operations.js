import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await authApi.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await authApi.post("/users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await authApi.post("users/logout");
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
