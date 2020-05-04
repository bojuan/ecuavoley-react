import React, { FunctionComponent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Reducers } from "../redux/reducers/rootReducers";
import ScoreBoard from "../components/ScoreBoard";

import {
  addPointTeamOneFirst,
  removePointTeamOneFirst,
  addPointTeamOneSecond,
  addPointTeamOneThird,
  setLimitFirstTeamOne,
  setLimitSecondTeamOne,
  setLimitFinalTeamOne,
} from "../redux/actions/teamOneAction";
import {
  addPointTeamTwoFirst,
  removePointTeamTwoFirst,
  addPointTeamTwoSecond,
  addPointTeamTwoThird,
  setLimitFirstTeamTwo,
  setLimitSecondTeamTwo,
  setLimitFinalTeamTwo,
} from "../redux/actions/teamTwoAction";
import {
  setTimeTime,
  setTimeLimitAdd,
  setTimeLimitRemove,
} from "../redux/actions/timeAction";
import Modal from "../components/Modal";

const Game: FunctionComponent<{}> = (props) => {
  const reducer: Reducers = useSelector((state: Reducers) => state);
  const dispatch = useDispatch();

  const [change, setChange] = useState<string>("left");
  const [openModalLimit, setOpenModalLimit] = useState<boolean>(false);

  const onCloseModalLimit: Function = () => setOpenModalLimit(false);

  return (
    <div className="Game">
      <div
        className="Game--container-scores"
        style={{
          flexDirection: reducer.timeReducer.time === 1 ||  reducer.timeReducer.time === 3 ? "row" : "row-reverse",
        }}
      >
        <div className="Game--team">
          <ScoreBoard
            limit={reducer.timeReducer.limitScore}
            score={
              reducer.timeReducer.time === 1
                ? reducer.teamOneReducer.scoreFirstTime.value
                : reducer.timeReducer.time === 2
                ? reducer.teamOneReducer.scoreSecondTime.value
                : reducer.teamOneReducer.scoreFinalTime.value
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
            setLimit={() => {
              if (reducer.timeReducer.time === 1) {
                dispatch(setLimitFirstTeamOne(reducer.timeReducer.limitScore));
              } else if (reducer.timeReducer.time === 2) {
                dispatch(setLimitSecondTeamOne(reducer.timeReducer.limitScore));
              } else {
                dispatch(setLimitFinalTeamOne(reducer.timeReducer.limitScore));
              }
            }}
            limitFunction={(time: number) => {
              dispatch(setTimeTime(time));
            }}
            color={reducer.teamOneReducer.color}
            teamName={reducer.teamOneReducer.name}
            beforeScore={reducer.teamOneReducer.scoreFirstTime.value}
            beforeLimit={reducer.teamOneReducer.scoreFirstTime.limitValue}
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
                ? reducer.teamTwoReducer.scoreFirstTime.value
                : reducer.timeReducer.time === 2
                ? reducer.teamTwoReducer.scoreSecondTime.value
                : reducer.teamTwoReducer.scoreFinalTime.value
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
            setLimit={() => {
              if (reducer.timeReducer.time === 1) {
                dispatch(setLimitFirstTeamTwo(reducer.timeReducer.limitScore));
              } else if (reducer.timeReducer.time === 2) {
                dispatch(setLimitSecondTeamTwo(reducer.timeReducer.limitScore));
              } else {
                dispatch(setLimitFinalTeamTwo(reducer.timeReducer.limitScore));
              }
            }}
            limitFunction={(time: number) => {
              dispatch(setTimeTime(time));
            }}
            color={reducer.teamTwoReducer.color}
            teamName={reducer.teamTwoReducer.name}
            beforeScore={reducer.teamTwoReducer.scoreFirstTime.value}
            beforeLimit={reducer.teamTwoReducer.scoreSecondTime.limitValue}
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
          <div className="Game-menu--limit">
            <span>Hasta:</span>
            <button className="button" onClick={() => setOpenModalLimit(true)}>
              {reducer.timeReducer.limitScore}
            </button>
          </div>
          <Modal visible={openModalLimit} onClose={onCloseModalLimit}>
            <div>
              <button
                className="button"
                onClick={() => dispatch(setTimeLimitRemove())}
              >
                {"<"}
              </button>
              {reducer.timeReducer.limitScore}
              <button
                className="button"
                onClick={() => dispatch(setTimeLimitAdd())}
              >
                {">"}
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Game;
