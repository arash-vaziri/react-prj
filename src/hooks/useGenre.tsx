import environment from "@/environments/local.env";
import useData from "./useData";

const endpoint = environment.endPoints.genre;

interface Genre {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}

const useGenre = () => useData<Genre>(endpoint.list);

export default useGenre;
