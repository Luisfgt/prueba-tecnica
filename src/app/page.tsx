import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import { HomePage } from "./components/Paginas/homePage";
import { Movie } from "./helpers/Interfaces";

export default async function Home() {


  const APIKEY_GOOGLE = process.env.APIKEY_GOOGLE
  const BUSCADOR_ID = process.env.BUSCADOR_ID
  const APIKEY_MOVIES = process.env.APIKEY_MOVIES
  const BEARER_TOKEN = process.env.APIKEY_MOVIES
  const APIKEY_URL = process.env.API_MOVIES_URL


  const popularMovies = async () => {
    try {
      const popularMovies = await axios.get(`${APIKEY_URL}trending/movie/popular?`, {
        params: {
          api_key: APIKEY_MOVIES,
          language: 'en-US',
        }
      })
      return popularMovies.data
    } catch (error) {
      console.log(error);
    }
  }

  const getFunction = async (typeSoli: string) => {
    try {

      if (typeSoli === 'genres') {
        const genres = await axios.get(`${APIKEY_URL}genre/movie/list?`, {
          params: {
            api_key: APIKEY_MOVIES,
            language: 'en-US',
          }
        })
        return genres.data
      }
      if (typeSoli === 'popular') {
        const popularMovies = await axios.get(`${APIKEY_URL}movie/popular?`, {
          params: {
            api_key: APIKEY_MOVIES,
            language: 'en-US',
          }
        })
        return popularMovies.data
      }
      if (typeSoli === 'NowPlaying') {
        const nowPlaying = await axios.get(`${APIKEY_URL}movie/now_playing?`, {
          params: {
            api_key: APIKEY_MOVIES,
            language: 'en-US',
          }
        })
        return nowPlaying.data
      }
      if (typeSoli === 'upComing') {
        const upComing = await axios.get(`${APIKEY_URL}movie/upcoming?`, {
          params: {
            api_key: APIKEY_MOVIES,
            language: 'en-US',
          }
        })
        return upComing.data
      }
      if (typeSoli === 'topRated') {
        const toprated = await axios.get(`${APIKEY_URL}movie/top_rated?`, {
          params: {
            api_key: APIKEY_MOVIES,
            language: 'en-US',
          }
        })
        return toprated.data
      }
      return
    } catch (error) {
      console.log(error);
    }
  }

  const genres = await getFunction('genres')
  const popularCard = await getFunction('popular')
  const nowPlayingCard = await getFunction('NowPlaying')
  const upcomingCard = await getFunction('upComing')
  const topRatedCard = await getFunction('topRated')

  const cards = [{
    "backdrop_path": "/uGmYqxh8flqkudioyFtD7IJSHxK.jpg",
    "id": 889737,
    "title": "Joker: Folie à Deux",
    "original_title": "Joker: Folie à Deux",
    "overview": "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
    "poster_path": "/aciP8Km0waTLXEYf5ybFK5CSUxl.jpg",
    "media_type": "movie",
    "adult": false,
    "original_language": "en",
    "genre_ids": [
      18,
      80,
      53
    ],
    "popularity": 1080.437,
    "release_date": "2024-10-01",
    "video": false,
    "vote_average": 5.8,
    "vote_count": 1026
  }]

  return (
    <HomePage
      genres={genres.genres}
      popularCard={popularCard.results}
      nowPlayingCard={nowPlayingCard.results}
      upcomingCard={upcomingCard.results}
      topRatedCard={topRatedCard.results}
      cards={cards as unknown as Movie[]}
    />
  );
}
