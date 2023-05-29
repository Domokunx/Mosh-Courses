import useData from "./useData";
import { Genre } from "./useGenres";

export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number 
}

interface Platform {
  id: number;
  slug: string;
  image_background: string;
  name: string;
}

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);

export default useGames;
