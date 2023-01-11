export interface IErrorObj {
  email?: string,
  password?: string,
  username?: string,
  fullname?: string
}

export interface IUser {
  email: string,
  id: string,
  name: string,
}

export interface ITweet {
  author_id: string;
  id: string;
  text: string;
}
