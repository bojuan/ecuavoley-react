import { FunctionComponent } from "react";
import { useGlobalContext } from "../context/MyGlobalContext";

const Score: FunctionComponent<{
  nameTeam: string;
  limitScore: number;
}> = ({ nameTeam, limitScore }) => {
  
  const {
    nameTeamOne,
    actualGameTime,
    setActualGameTime,
    firstGameTime,
    secondGameTime,
    thirdGameTime,
  } = useGlobalContext();

  const isTeamOne = nameTeam === nameTeamOne;

  const isMyChange = nameTeam === actualGameTime.teamChange;

  const actualScore = isTeamOne
    ? actualGameTime.scoreTeamOne
    : actualGameTime.scoreTeamTwo;

  const handleChangeScore = (isDown?: boolean) => {
    setActualGameTime((prevState) => {
      const copy = { ...prevState };
      if (isTeamOne) {
        copy.scoreTeamOne = isDown
          ? prevState.scoreTeamOne - 1
          : prevState.scoreTeamOne + 1;
      } else {
        copy.scoreTeamTwo = isDown
          ? prevState.scoreTeamTwo - 1
          : prevState.scoreTeamTwo + 1;
      }
      return copy;
    });
  };

  return (
    <div className="score">
      <button
        disabled={!isMyChange || actualScore === limitScore}
        className="score__button"
        type="button"
        onClick={() => {
          handleChangeScore();
        }}
      >
        Up
      </button>
      <div className="score__container">
        <span className="score__head">{nameTeam}</span>
        <span className="score__numbers">{actualScore}</span>
      </div>

      <button
        disabled={!isMyChange || actualScore === 0}
        className="score__button"
        type="button"
        onClick={() => {
          handleChangeScore(true);
        }}
      >
        Down
      </button>

      <div className="score__check">
        <div
          className={`score__checkContainer ${
            !firstGameTime.winner
              ? ""
              : firstGameTime.winner === nameTeam
              ? "score__checkContainer--win"
              : "score__checkContainer--lose"
          }`}
        />
        <div
          className={`score__checkContainer ${
            !secondGameTime.winner
              ? ""
              : secondGameTime.winner === nameTeam
              ? "score__checkContainer--win"
              : "score__checkContainer--lose"
          }`}
        />
        <div
          className={`score__checkContainer ${
            !thirdGameTime.winner
              ? ""
              : thirdGameTime.winner === nameTeam
              ? "score__checkContainer--win"
              : "score__checkContainer--lose"
          }`}
        />
      </div>
    </div>
  );
};

export default Score;
