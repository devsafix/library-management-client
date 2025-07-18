export interface IBook {
  _id?: string;
  title: string;
  author: string;
  cover?: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
