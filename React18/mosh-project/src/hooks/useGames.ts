import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { genres: gameQuery.genre?.id, search: gameQuery.searchText, parent_platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder?.value  }},
    [gameQuery]
  );

export default useGames;
