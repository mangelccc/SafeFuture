import React, { useState } from 'react';
import { videos, getVideoId  } from "../../../bibliotecas/biblioteca.js"

const Videos = () => {
  const [filter, setFilter] = useState('Todos');
  const countries = ['Todos', ...Array.from(new Set(videos.map(v => v.country)))];
  const filteredVideos = filter === 'Todos' ? videos : videos.filter(v => v.country === filter);

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="country-select" className="block mb-2 text-sm font-medium text-black dark:text-white">
          Filtrar por país:
        </label>
        <select
          id="country-select"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="mt-1 block w-[150px] bg-white dark:bg-black2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
        >
          {countries.map((country, idx) => (
            <option key={idx} value={country} className="bg-white dark:bg-black2">
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center m-2">
        {filteredVideos.map((video, idx) => {
          const videoId = getVideoId(video.url);
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          return (
            <div key={idx} className="sm:min-w-[350px] p-2">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-black3 transition transform hover:scale-102">
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={thumbnailUrl}
                    alt={`Miniatura de ${video.country}`}
                    className="w-[350px] h-[180px] object-cover rounded-lg"
                  />
                </a>
                <p className="mt-2 text-center font-medium text-black dark:text-white">
                  {video.country}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
