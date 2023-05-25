import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

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

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, []);

  return { games, error };
};

export default useGames;
