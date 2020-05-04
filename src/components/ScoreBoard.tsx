import React, { FunctionComponent } from "react";

interface PropsScoreBoards {
  limit: number;
  score: number;
  time: number;
  addPoint: Function;
  removePoint: Function;
  setLimit?: Function;
  color: string;
  teamName: string;
  limitFunction: Function;
  beforeScore?: number | null;
  beforeLimit?: number | null;
}

const ScoreBoard: FunctionComponent<PropsScoreBoards> = (
  props: PropsScoreBoards
) => {
  return (
    <div className="score-board" style={{ backgroundColor: props.color }}>
      <div className="score-board--container-score-all">
        <div className="score-board--container-button">
          <button
            onClick={() => {
              if (props.score === props.limit - 1) {
                props.addPoint();
                if (props.time === 1) {
                  props.limitFunction(2);
                  if (props.setLimit) {
                    props.setLimit();
                  }
                } else if (props.time === 2) {
                  console.log(
                    { fs: props.beforeScore, pL: props.beforeLimit },
                    props.beforeScore !== props.limit
                  );
                  if (props.setLimit) {
                    props.setLimit();
                  }
                  if (props.beforeScore !== props.beforeLimit) {
                    console.log("ENTROOOOOO");
                    props.limitFunction(3);
                    return;
                  }
                  alert(`Gano en dos tiempos el equipo ${props.teamName}`);
                } else if (props.time === 3) {
                  if (props.setLimit) {
                    props.setLimit();
                  }
                  alert(`Gano en tres tiempos el equipo ${props.teamName}`);
                }
                return;
              }
              props.addPoint();
            }}
            className="score-board--button"
          >
            Up
          </button>
        </div>

        <div className="core-board--container-score">
          <div className="core-board--score">
            <span>{props.score}</span>
          </div>
        </div>
        <div className="score-board--container-button">
          <button
            onClick={() => {
              if (props.score !== 0) {
                props.removePoint();
              }
            }}
            className="score-board--button"
          >
            Down
          </button>
        </div>
      </div>
      <div
        className="score-board--continer-title"
        style={{ backgroundColor: props.color }}
      >
        <h2>{props.teamName}</h2>
      </div>
    </div>
  );
};

export default ScoreBoard;
