import { useGlobalContext } from "../context/MyGlobalContext";
import Score from "../components/Score";
import LimitGameTime from "../components/LimitGameTime";
import { ActualGameTime } from "../interfaces/interfaces";

const GameSection = () => {
  const {
    nameTeamOne,
    setNameTeamOne,
    nameTeamTwo,
    setNameTeamTwo,
    actualGameTime,
    setActualGameTime,
    firstGameTime,
    secondGameTime,
    thirdGameTime,
    section,
  } = useGlobalContext();

  const dataGameTime: ActualGameTime = {
    time: !firstGameTime.winner
      ? "first"
      : !secondGameTime.winner
      ? "second"
      : "third",
    limitScore: !firstGameTime.winner
      ? firstGameTime.limitScore
      : !secondGameTime.winner
      ? secondGameTime.limitScore
      : thirdGameTime.limitScore,
  };

  const handleChange = () => {
    setActualGameTime((prevState) => ({
      ...prevState,
      sideTeamChange: prevState.sideTeamChange === "left" ? "right" : "left",
      teamChange:
        prevState.teamChange === nameTeamOne ? nameTeamTwo : nameTeamOne,
    }));
  };

  const handleChangeSide = () => {
    setActualGameTime((prevState) => ({
      ...prevState,
      scoreTeamOne: prevState.scoreTeamTwo,
      scoreTeamTwo: prevState.scoreTeamOne,
      sideTeamChange: prevState.sideTeamChange === "left" ? "right" : "left",
    }));

    setNameTeamOne(nameTeamTwo);
    setNameTeamTwo(nameTeamOne);
  };

  const sideArrow = `gameSection__arrow--${actualGameTime.sideTeamChange}`;

  return (
    <div
      className="gameSection"
      style={{ display: section === "init" ? "none" : undefined }}
    >
      <div className="gameSection__container">
        <Score nameTeam={nameTeamOne} limitScore={dataGameTime.limitScore} />
      </div>
      <div className="gameSection__container">
        <Score nameTeam={nameTeamTwo} limitScore={dataGameTime.limitScore} />
      </div>
      <LimitGameTime
        limit={dataGameTime.limitScore}
        setLimit={() => {}}
        time={dataGameTime.time}
      />
      <div className="gameSection__change">
        <div className="gameSection__changeContainer">
          <div className={`gameSection__arrow ${sideArrow}`}>
            <img src="/arrow.svg" alt="arrow" />
          </div>

          <button type="button" onClick={handleChange}/>
        </div>
      </div>

      <button type="button" className="changeSide" onClick={handleChangeSide}>
       <img alt="change" src="https://www.flaticon.com/svg/vstatic/svg/152/152360.svg?token=exp=1619915958~hmac=1e8dc71b92a0c123d4a1032aa26dd551" />
      </button>
    </div>
  );
};

export default GameSection;
