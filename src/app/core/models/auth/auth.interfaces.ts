import { FormControl } from "@angular/forms";

export interface LoginRequest {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface LoginResponse {
  token: string;
}
