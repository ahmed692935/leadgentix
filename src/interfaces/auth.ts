export interface SignupData {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthState {
  user: string | null;
  loading: boolean;
  error: string | null;
}
