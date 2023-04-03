export interface User {
  id: string;
  username: string;
  email: string;
  profile: string;
  telephone: string;
  roles: role[];
}

export interface UserRequest {
  username: string;
  email: string;
  profile: string;
  telephone: string;
  roles: role[];
}

export type role = 'READER' | 'TEACHER';
