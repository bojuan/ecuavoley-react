import React, { useState } from "react";
import {
  MyGlobalContext,
  TypeSections,
  GameTime,
  INIT_DATA_GAME_TIME,
  ActualGameTime,
  INIT_DATA_ACTUAL_GAME,
} from "./context/MyGlobalContext";
import InitSection from "./sections/InitSection";
import GameSection from "./sections/GameSection";
import EndTime from "./components/EndTime";

function App() {
  const [section, setSection] = useState<TypeSections>("init");

  const [nameTeamOne, setNameTeamOne] = useState<string>("");
  const [nameTeamTwo, setNameTeamTwo] = useState<string>("");

  const [firstGameTime, setFirstGameTime] = useState<GameTime>(
    INIT_DATA_GAME_TIME
  );
  const [secondGameTime, setSecondGameTime] = useState<GameTime>(
    INIT_DATA_GAME_TIME
  );
  const [thirdGameTime, setThirdGameTime] = useState<GameTime>(
    INIT_DATA_GAME_TIME
  );

  const [actualGameTime, setActualGameTime] = useState<ActualGameTime>(
    INIT_DATA_ACTUAL_GAME
  );

  return (
    <MyGlobalContext.Provider
      value={{
        section,
        setSection,
        nameTeamOne,
        setNameTeamOne,
        nameTeamTwo,
        setNameTeamTwo,
        firstGameTime,
        setFirstGameTime,
        secondGameTime,
        setSecondGameTime,
        thirdGameTime,
        setThirdGameTime,
        actualGameTime,
        setActualGameTime,
      }}
    >
      <InitSection />
      <GameSection />
      <EndTime />
    </MyGlobalContext.Provider>
  );
}

export default App;
