import useData from "./useData";

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

const useGames = () => useData<Game>('/games')

export default useGames;
