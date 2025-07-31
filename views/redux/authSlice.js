import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
     clearError: (state) => {
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { setLoading, setError, clearError, setUser } = authSlice.actions;

//Login
export const loginUser = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const raw = await AsyncStorage.getItem('registeredUsers');
    const users = raw ? JSON.parse(raw) : [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) throw new Error('Invalid credentials');

    await AsyncStorage.setItem('user', JSON.stringify(user));
    dispatch(setUser(user));
    return true;
  } catch (err) {
    dispatch(setError(err.message));
    dispatch(setLoading(false));
    return false;
  }
};

//Register
export const registerUser = (newUser) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const raw = await AsyncStorage.getItem('registeredUsers');
    const users = raw ? JSON.parse(raw) : [];

    if (users.some(u => u.email === newUser.email)) {
      throw new Error('Email already registered');
    }

    users.push(newUser);
    await AsyncStorage.setItem('registeredUsers', JSON.stringify(users));
    return true;
  } catch (err) {
    dispatch(setError(err.message));
    dispatch(setLoading(false));
    return false;
  }
};

//Logout
export const logoutUser = () => async (dispatch) => {
  await AsyncStorage.removeItem('user');
  dispatch(setUser(null));
};

// Auto-login
export const checkAuthStatus = () => async (dispatch) => {
  try {
    const userData = await AsyncStorage.getItem('user');
    if (userData) {
      dispatch(setUser(JSON.parse(userData)));
    }
  } catch (error) {
    console.error('Auth check error:', error);
  }
};


export default authSlice.reducer;
