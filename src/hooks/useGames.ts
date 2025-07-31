import { useEffect, useState } from "react";
import dataSrv from "@/services/dataSrv";
import   environment  from "@/environments/local.env";
import { CanceledError } from "axios";

const endPoint = environment.endPoints.game;

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

interface GameRes {
  count: number;
  results: Game[];
}

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState([]);
    const [isLoading, setLoading] = useState(false);

    
    useEffect(() => {
        
        const controller = new AbortController();
        setLoading(true);


        dataSrv
          .get<GameRes>(endPoint.list , { signal : controller.signal })
          .then((res) => {
          
            setGames(res.data.results)
            setLoading(false);
          
          })
          .catch((error) => {

            if (error instanceof CanceledError) return;

            setError(error.message);
            setLoading(false);
          
           });

        return ()  => controller.abort();
    
    }, []);


    return {
        games,
        error,
        isLoading
    }


}

export default useGames;