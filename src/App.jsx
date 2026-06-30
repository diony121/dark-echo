import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";

export default function App() {
  const [episodes] = useState(episodeList);

  const [selectedEpisode, setSelectedEpisode] = useState(null);

  function EpisodeList() {
    return (
      <section className="episode-list">
        <h2>Episodes</h2>
        <ul>
          {episodes.map((episode) => (
            <li 
              key={episode.id} 
              onClick={() => setSelectedEpisode(episode)}
              className={selectedEpisode?.id === episode.id ? "active" : ""}
            >
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="episode-details">
          <h2>Select an Episode</h2>
          <p>Click on an episode from the list to see more details.</p>
        </section>
      );
    }

    return (
      <section className="episode-details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
        <button className="watch-btn">Watch now</button>
      </section>
    );
  }

  return (
    <div className="app">
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </div>
  );
}