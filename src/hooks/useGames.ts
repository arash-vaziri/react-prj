import   environment  from "@/environments/local.env";
import useData from "./useData";
import type { Genre } from "./useGenre";

const endpoint = environment.endPoints.game;

export interface Platform {
  id : number,
  name : string,
  slug : string
}


export interface Game {
  id: number;
  name: string;
  background_image : string;
  parent_platforms : [{ platform : Platform}];
  metacritic : number
}

const useGames = (selectedGenre : Genre | null ) => useData<Game>(endpoint.list , { params : { genres : selectedGenre?.id} } ,[selectedGenre?.id]);

export default useGames;