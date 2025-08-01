import   environment  from "@/environments/local.env";
import useData from "./useData";

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

const useGames = () => useData<Game>(endpoint.list);

export default useGames;