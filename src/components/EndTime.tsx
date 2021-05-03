import { GameTime, useGlobalContext } from "../context/MyGlobalContext";
import { ActualGameTime } from "../interfaces/interfaces";
const EndTime = () => {
  const {
    nameTeamOne,
    setNameTeamOne,
    nameTeamTwo,
    setNameTeamTwo,
    actualGameTime,
    setActualGameTime,
    firstGameTime,
    setFirstGameTime,
    secondGameTime,
    setSecondGameTime,
    thirdGameTime,
    setThirdGameTime,
    setSection,
  } = useGlobalContext();

  const dataGameTime: ActualGameTime = {
    time:
      !firstGameTime.winner && !secondGameTime.winner
        ? "first"
        : !secondGameTime.winner || !firstGameTime.winner
        ? "second"
        : "third",
    limitScore: !firstGameTime.winner
      ? firstGameTime.limitScore
      : !secondGameTime.winner
      ? secondGameTime.limitScore
      : thirdGameTime.limitScore,
  };

  const isEndTime =
    actualGameTime.scoreTeamOne === dataGameTime.limitScore ||
    actualGameTime.scoreTeamTwo === dataGameTime.limitScore;

  const isTeamOneWinner =
    isEndTime && actualGameTime.scoreTeamOne === dataGameTime.limitScore;

  const isThereThirdTime =
    (dataGameTime.time === "second" &&
      firstGameTime.winner === nameTeamOne &&
      !isTeamOneWinner) ||
    (firstGameTime.winner === nameTeamTwo && isTeamOneWinner);

  const textButton =
    dataGameTime.time === "third"
      ? "GO NEW GAME"
      : dataGameTime.time === "first"
      ? "GO TO SECOND TIME"
      : isThereThirdTime
      ? "GO TO THIRD TIME"
      : "GO NEW GAME";

  const newGame = () => {
    const resetdata: GameTime = {
      limitScore: 12,
      logs: [],
      winner: null,
    };
   
    setFirstGameTime(resetdata);
    setSecondGameTime(resetdata);
    setThirdGameTime(resetdata);
    setSection("init");
    
  };

  const handleGo = () => {
    if (dataGameTime.time === "first") {
      setFirstGameTime((prevState) => ({
        ...prevState,
        winner: isTeamOneWinner ? nameTeamOne : nameTeamTwo,
      }));
    } else if (dataGameTime.time === "second") {
      setSecondGameTime((prevState) => ({
        ...prevState,
        winner: isTeamOneWinner ? nameTeamOne : nameTeamTwo,
      }));
      if (!isThereThirdTime) newGame();
    } else if (dataGameTime.time === "third") {
      setThirdGameTime((prevState) => ({
        ...prevState,
        winner: isTeamOneWinner ? nameTeamOne : nameTeamTwo,
      }));
      newGame();
    }

    setActualGameTime({
      scoreTeamOne: 0,
      scoreTeamTwo: 0,
      sideTeamChange:
        actualGameTime.sideTeamChange,
      teamChange: isTeamOneWinner ? nameTeamTwo : nameTeamOne,
    });
    setNameTeamOne(nameTeamTwo);
    setNameTeamTwo(nameTeamOne);
  };

  return (
    <div
      className={`EndTime ${
        isEndTime ? "EndTime--visible" : "EndTime--noVisible"
      }`}
    >
      <div className="EndTime__container">
        <div className="EndTime__text">
          <span>Winner</span>
          <b>{isTeamOneWinner ? nameTeamOne : nameTeamTwo}</b>
        </div>

        <button className="EndTime__button" type="button" onClick={handleGo}>
          {textButton}
        </button>
      </div>
    </div>
  );
};

export default EndTime;
