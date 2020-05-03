import React, { FunctionComponent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Reducers } from "../redux/reducers/rootReducers";
import ScoreBoard from "../components/ScoreBoard";

import {
  addPointTeamOneFirst,
  removePointTeamOneFirst,
  addPointTeamOneSecond,
  addPointTeamOneThird,
} from "../redux/actions/teamOneAction";
import {
  addPointTeamTwoFirst,
  removePointTeamTwoFirst,
  addPointTeamTwoSecond,
  addPointTeamTwoThird,
} from "../redux/actions/teamTwoAction";
import { setTimeTime } from "../redux/actions/timeAction";

const Game: FunctionComponent<{}> = (props) => {
  const reducer: Reducers = useSelector((state: Reducers) => state);
  const dispatch = useDispatch();

  const [change, setChange] = useState<string>("left");

  return (
    <div className="Game">
      <div
        className="Game--container-scores"
        style={{
          flexDirection: reducer.timeReducer.time === 1 ? "row" : "row-reverse",
        }}
      >
        <div className="Game--team">
          <ScoreBoard
            limit={reducer.timeReducer.limitScore}
            score={
              reducer.timeReducer.time === 1
                ? reducer.teamOneReducer.scoreFirstTime
                : reducer.timeReducer.time === 2
                ? reducer.teamOneReducer.scoreSecondTime
                : reducer.teamOneReducer.scoreFinalTime
            }
            time={reducer.timeReducer.time}
            addPoint={() => {
              if (reducer.timeReducer.time === 1) {
                dispatch(addPointTeamOneFirst());
              } else if (reducer.timeReducer.time === 2) {
                dispatch(addPointTeamOneSecond());
              } else {
                dispatch(addPointTeamOneThird());
              }
            }}
            removePoint={() => dispatch(removePointTeamOneFirst())}
            limitFunction={(time: number) => {
              dispatch(setTimeTime(time));
            }}
            color={reducer.teamOneReducer.color}
            teamName={reducer.teamOneReducer.name}
            beforeScore={reducer.teamOneReducer.scoreFirstTime}
          />
          {change !== "left" &&
            (reducer.timeReducer.time === 1 ||
              reducer.timeReducer.time === 3) && (
              <div className="Game--block" />
            )}
          {change === "left" && reducer.timeReducer.time === 2 && (
            <div className="Game--block" />
          )}
        </div>
        <div className="Game--team">
          <ScoreBoard
            limit={reducer.timeReducer.limitScore}
            score={
              reducer.timeReducer.time === 1
                ? reducer.teamTwoReducer.scoreFirstTime
                : reducer.timeReducer.time === 2
                ? reducer.teamTwoReducer.scoreSecondTime
                : reducer.teamTwoReducer.scoreFinalTime
            }
            time={reducer.timeReducer.time}
            addPoint={() => {
              if (reducer.timeReducer.time === 1) {
                dispatch(addPointTeamTwoFirst());
              } else if (reducer.timeReducer.time === 2) {
                dispatch(addPointTeamTwoSecond());
              } else {
                dispatch(addPointTeamTwoThird());
              }
            }}
            removePoint={() => dispatch(removePointTeamTwoFirst())}
            limitFunction={(time: number) => {
              dispatch(setTimeTime(time));
            }}
            color={reducer.teamTwoReducer.color}
            teamName={reducer.teamTwoReducer.name}
            beforeScore={reducer.teamTwoReducer.scoreFirstTime}
          />

          {change === "left" &&
            (reducer.timeReducer.time === 1 ||
              reducer.timeReducer.time === 3) && (
              <div className="Game--block" />
            )}
          {change !== "left" && reducer.timeReducer.time === 2 && (
            <div className="Game--block" />
          )}
        </div>
      </div>
      <div className="Game-menu">
        <img
          className={`Game-menu--arrow ${
            change === "left"
              ? "Game-menu--arrow__lefth"
              : "Game-menu--arrow__right"
          }`}
          src="https://image.flaticon.com/icons/png/512/626/626078.png"
          alt="arrow"
        />
        <button
          className="Game-menu--button"
          onClick={() => {
            console.log("reducer", reducer);
            if (change === "left") {
              setChange("right");
            } else {
              setChange("left");
            }
          }}
        >
          CAMBIO
        </button>
        <div className="Game-menu--time">
          {reducer.timeReducer.time === 1
            ? "Primer Tiempo"
            : reducer.timeReducer.time === 2
            ? "Segundo Tiempo"
            : "Tercer Tiempo"}
          <div>Hasta: {reducer.timeReducer.limitScore}</div>
        </div>
      </div>
    </div>
  );
};

export default Game;
