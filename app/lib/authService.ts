import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "user-auth-token";

/**
 * Simulates an API call to log in a user.
 * In a real app, this would make a `fetch` or `axios` request to your backend.
 * @param email - The user's email.
 * @param password - The user's password.
 * @returns A promise that resolves with a mock authentication token.
 */
export const login = async (email: string, password?: string): Promise<string> => {
  console.log(`Attempting to log in with email: ${email}`);
  // Simulate network delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // In a real app, you'd validate credentials against a server.
      if (email) {
        const mockToken = `mock-token-for-${email}`;
        console.log("Login successful, received token:", mockToken);
        resolve(mockToken);
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};

/**
 * Simulates an API call to sign up a new user.
 * @param email - The user's email.
 * @param password - The user's password.
 * @returns A promise that resolves with a mock authentication token.
 */
export const signup = async (email: string, password?: string): Promise<string> => {
  console.log(`Attempting to sign up with email: ${email}`);
  // Simulate network delay and user creation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        const mockToken = `mock-token-for-new-user-${email}`;
        console.log("Signup successful, received token:", mockToken);
        resolve(mockToken);
      } else {
        reject(new Error("Email and password are required for signup."));
      }
    }, 1000);
  });
};

/**
 * Simulates an API call to register a new user without logging them in.
 * @param email - The user's email.
 * @param password - The user's password.
 * @returns A promise that resolves on successful registration.
 */
export const register = async (email: string, password?: string): Promise<void> => {
  console.log(`Attempting to register user with email: ${email}`);
  // Simulate network delay and user creation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        console.log("Registration successful for:", email);
        resolve();
      } else {
        reject(new Error("Email and password are required for registration."));
      }
    }, 1000);
  });
};

/**
 * Stores the authentication token securely.
 */
export const storeToken = async (token: string) => {
  await SecureStore.setItemAsync(TOKEN_KEY, token);
};

export const getToken = () => SecureStore.getItemAsync(TOKEN_KEY);

export const removeToken = () => SecureStore.deleteItemAsync(TOKEN_KEY);