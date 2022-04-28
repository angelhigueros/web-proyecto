import React, { useState } from 'react';
import img1 from '../../assets/img/story-1.png';
import img2 from '../../assets/img/story-2.png';

function GameStory() {
  const [view, setView] = useState(true);

  return (
    <div
      className="gamestory-container"
      style={{ backgroundImage: `url(${view ? img1 : img2})` }}
    >
      <div className="gamestory-story">
        <div className="gamestory-buttons">
          <button
            style={{ backgroundColor: view ? '#000000' : '' }}
            onClick={() => setView(true)}
            type="button"
            className="gamestore-btn-1"
          >
            GAME
          </button>
          <button
            style={{ backgroundColor: view ? '' : '#000000' }}
            onClick={() => setView(false)}
            type="button"
            className="gamestore-btn-2"
          >
            STORY
          </button>
        </div>
        <br />
        <div className="gamestory-text">
          <pre>
            {view
              ? `NieR Replicant ver.1.22474487139... is an updated version of NieR 
              Replicant, previously only released in Japan. 

Discover the one-of-a-kind prequel of the critically-acclaimed 
masterpiece NieR:Automata.

Now with a modern upgrade, experience masterfully revived visuals, a 
fascinating storyline and more!

The protagonist is a kind young man living in a remote village. In 
order to save his sister Yonah, who fell terminally ill to the Black 
Scrawl, he sets out with Grimoire Weiss, a strange talking tome, to 
search for the "Sealed verses."`
              : `In a distant, distant future, humanity is on the brink of extinction.

A black scrawl disease and strange beasts threaten the world.

A young kindhearted boy makes a promise to his little sister.

A thousand-year lie that would live on for eternity...`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default GameStory;
