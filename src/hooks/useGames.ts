import   environment  from "@/environments/local.env";
import useData from "./useData";
import type { Genre } from "./useGenre";
import type { GameQuery } from "@/App";

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

const useGames = (gameQuery : GameQuery  ) => useData<Game>(endpoint.list , { params : { genres : gameQuery.genre?.id , parent_platforms : gameQuery.platform?.id} } ,[gameQuery]);

export default useGames;