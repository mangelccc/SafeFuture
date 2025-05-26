import React, { useState } from 'react';

const videos = [
  // Suiza
  { country: 'Suiza', url: 'https://www.youtube.com/watch?v=cBQumoWA2TA' },
  { country: 'Suiza', url: 'https://www.youtube.com/watch?v=nO_nL3Po3rg' },
  { country: 'Suiza', url: 'https://www.youtube.com/watch?v=3cm44c360C0' },

  // Irlanda
  { country: 'Irlanda', url: 'https://www.youtube.com/watch?v=Hem4PTwgzMs' },
  { country: 'Irlanda', url: 'https://www.youtube.com/watch?v=7bQRRFDK4-A' },
  { country: 'Irlanda', url: 'https://www.youtube.com/watch?v=Sg9d0GKwrHM' },

  // Australia
  { country: 'Australia', url: 'https://www.youtube.com/watch?v=vW1ei0CyACk' },
  { country: 'Australia', url: 'https://www.youtube.com/watch?v=lY08CI30qcU' },
  { country: 'Australia', url: 'https://www.youtube.com/watch?v=M-914uAcwy8' },

  // Alemania
  { country: 'Alemania', url: 'https://www.youtube.com/watch?v=6cTrb1Uml3w' },
  { country: 'Alemania', url: 'https://www.youtube.com/watch?v=PttnGf4QDwc' },
  { country: 'Alemania', url: 'https://www.youtube.com/watch?v=2PuqN-xnw64' },

  // Canadá
  { country: 'Canada', url: 'https://www.youtube.com/watch?v=vM54IDn4RCI' },
  { country: 'Canada', url: 'https://www.youtube.com/watch?v=3lj-Qf-ghIo' },
  { country: 'Canada', url: 'https://www.youtube.com/watch?v=PsuUufHaCuI' },

  // Reino Unido
  { country: 'UK', url: 'https://www.youtube.com/watch?v=5fyagkd97LQ' },
  { country: 'UK', url: 'https://www.youtube.com/watch?v=5fyagkd97LQ' },
  { country: 'UK', url: 'https://www.youtube.com/watch?v=5fyagkd97LQ' },

  // Países Bajos
  { country: 'Paises Bajos', url: 'https://www.youtube.com/watch?v=hQPyzh0U0QE' },
  { country: 'Paises Bajos', url: 'https://www.youtube.com/watch?v=WpovIMt9WL8' },
  { country: 'Paises Bajos', url: 'https://www.youtube.com/watch?v=TZiuX-nXtuI' },

  // Noruega
  { country: 'Noruega', url: 'https://www.youtube.com/watch?v=C5zORsjab5Q' },
  { country: 'Noruega', url: 'https://www.youtube.com/watch?v=KLuTLF3x9sA' },
  { country: 'Noruega', url: 'https://www.youtube.com/watch?v=fT2bqB0f_4w' },

  // Estados Unidos
  { country: 'EEUU', url: 'https://www.youtube.com/watch?v=EZLV7d1L7JY' },
  { country: 'EEUU', url: 'https://www.youtube.com/watch?v=hn7naNNk0_M' },
  { country: 'EEUU', url: 'https://www.youtube.com/watch?v=vjNR1c6u_Jc' },

  // Islandia
  { country: 'Islandia', url: 'https://www.youtube.com/watch?v=whjeMdOvXC8' },
  { country: 'Islandia', url: 'https://www.youtube.com/watch?v=5r10WosT5is' },
  { country: 'Islandia', url: 'https://www.youtube.com/watch?v=QhtrKwcYo5Q' },
];

const getVideoId = (url) => {
  const match = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : '';
};

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

      <div className="flex flex-wrap justify-around -m-2">
        {filteredVideos.map((video, idx) => {
          const videoId = getVideoId(video.url);
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          return (
            <div key={idx} className="sm:w-[350px] p-2">
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
