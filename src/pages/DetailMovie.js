import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailMovie.css';
import Header from '../components/Header/Header';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const API_KEY = 'fb1f301ce530a9bb513825b9f44b9df1';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/${id}/videos?api_key=${API_KEY}`
        );
        const data = await response.json();
        if (data.results.length > 0) {
          setVideo(data.results[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
    fetchVideo();
  }, [id]);

  return (
    <>
    <Header />
      <div className="container">
        {movie && (
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${IMG_API}${movie.backdrop_path})`,
            }}
          >
            <div className="content">
              <h2 className="detail-title">{movie.original_title}</h2>
              <p className="overview">{movie.overview}</p>
              <p className="release-date">
                Release Date: {movie.release_date}
              </p>
              {video && (
                <div className="video-container">
                  <iframe
                    className="video"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailMovie;
