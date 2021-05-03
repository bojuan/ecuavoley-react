import { createContext, useContext } from "react";

export type TypeSections = "init" | "game";

export interface GameTime {
  limitScore: number;
  winner: string | null;
  logs: string[];
}

export const INIT_DATA_GAME_TIME: GameTime = {
  limitScore: 12,
  logs: [],
  winner: null,
};

export interface ActualGameTime {
  teamChange: string;
  sideTeamChange: 'left' | 'right';
  scoreTeamOne: number;
  scoreTeamTwo: number;
}

export const INIT_DATA_ACTUAL_GAME: ActualGameTime = {
    teamChange: '',
    sideTeamChange: 'left',
    scoreTeamOne: 0,
    scoreTeamTwo: 0
  }

export interface GlobalContent {
  section: TypeSections;
  setSection: React.Dispatch<React.SetStateAction<TypeSections>>;
  nameTeamOne: string;
  setNameTeamOne: React.Dispatch<React.SetStateAction<string>>;
  nameTeamTwo: string;
  setNameTeamTwo: React.Dispatch<React.SetStateAction<string>>;
  firstGameTime: GameTime;
  setFirstGameTime: React.Dispatch<React.SetStateAction<GameTime>>;
  secondGameTime: GameTime;
  setSecondGameTime: React.Dispatch<React.SetStateAction<GameTime>>;
  thirdGameTime: GameTime;
  setThirdGameTime: React.Dispatch<React.SetStateAction<GameTime>>;
  actualGameTime: ActualGameTime;
  setActualGameTime: React.Dispatch<React.SetStateAction<ActualGameTime>>;
}

export const MyGlobalContext = createContext<GlobalContent>({
  section: "init", // set a default value
  setSection: (s) => {},
  nameTeamOne: "",
  setNameTeamOne: (s) => {},
  nameTeamTwo: "",
  setNameTeamTwo: (s) => {},
  firstGameTime: INIT_DATA_GAME_TIME,
  setFirstGameTime: (s) => {},
  secondGameTime: INIT_DATA_GAME_TIME,
  setSecondGameTime: (s) => {},
  thirdGameTime: INIT_DATA_GAME_TIME,
  setThirdGameTime: (s) => {},
  actualGameTime: INIT_DATA_ACTUAL_GAME,
  setActualGameTime: (s) => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
