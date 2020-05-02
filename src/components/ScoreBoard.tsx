import React, { FunctionComponent } from "react";

interface PropsScoreBoards {
  limit: number;
  score: number;
}

const ScoreBoard: FunctionComponent<{ limit: number; score: number }> = (
  props: PropsScoreBoards
) => {
  return (
    <div>
      <div>
        <button>Up</button>
      </div>
      Hasta {props.limit}
      <div>
        <h1>{props.score}</h1>
      </div>
      <div>
        <button>Down</button>
      </div>
    </div>
  );
};

export default ScoreBoard;
