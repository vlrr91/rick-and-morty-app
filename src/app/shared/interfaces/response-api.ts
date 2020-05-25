import {ICharacter} from "./character";

export interface ResponseApi {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
  charactersPerPage: ICharacter[];
}
