import { useEffect, useState } from "react";
import dataSrv from "@/services/dataSrv";
import   environment  from "@/environments/local.env";
import { CanceledError } from "axios";

const endPoint = environment.endPoints.game;

interface Game {
  id: number;
  name: string;
}

interface GameRes {
  count: number;
  results: Game[];
}

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState([]);

    
    useEffect(() => {
        
        const controller = new AbortController();
        
        dataSrv
          .get<GameRes>(endPoint.list , { signal : controller.signal })
          .then((res) => setGames(res.data.results))
          .catch((error) => {

            if (error instanceof CanceledError) return;

            setError(error.message);
          
           });

        return ()  => controller.abort();
    
    }, []);


    return {
        games,
        error
    }


}

export default useGames;