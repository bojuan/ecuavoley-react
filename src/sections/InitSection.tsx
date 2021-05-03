import { FunctionComponent, useEffect, useState } from "react";
import { useGlobalContext } from "../context/MyGlobalContext";
import InputName from "../components/InputName";

import myErrors from "../utils/errors";
import Logo from "../components/Logo";

const InitSection: FunctionComponent = () => {
  const {
    section,
    setSection,
    nameTeamOne,
    nameTeamTwo,
    setActualGameTime,
    setNameTeamOne,
    setNameTeamTwo,
  } = useGlobalContext();

  const [errors, setErrors] = useState<string[]>([
    myErrors.TEAM_TWO_IS_EMPTY,
    myErrors.TEAM_ONE_IS_EMPTY,
    myErrors.EQUALS_NAMES,
  ]);

  useEffect(() => {
    if (section === "init") {
      setErrors([
        myErrors.TEAM_TWO_IS_EMPTY,
        myErrors.TEAM_ONE_IS_EMPTY,
        myErrors.EQUALS_NAMES,
      ]);
      setNameTeamOne("");
      setNameTeamTwo("");
    }
  }, [section, setNameTeamOne, setNameTeamTwo]);

  const handleSetNameOne = (name: string) => {
    if (name === "") {
      setErrors((prevstate) => [...prevstate, myErrors.TEAM_ONE_IS_EMPTY]);
    } else {
      setErrors((prevstate) =>
        prevstate.filter((err) => err !== myErrors.TEAM_ONE_IS_EMPTY)
      );
    }
    if (name === nameTeamTwo) {
      setErrors((prevstate) => [...prevstate, myErrors.EQUALS_NAMES]);
    } else {
      setErrors((prevstate) =>
        prevstate.filter((err) => err !== myErrors.EQUALS_NAMES)
      );
    }
    setNameTeamOne(name);
  };

  const handleSetNameTwo = (name: string) => {
    if (name === "") {
      setErrors((prevstate) => [...prevstate, myErrors.TEAM_TWO_IS_EMPTY]);
    } else {
      setErrors((prevstate) =>
        prevstate.filter((err) => err !== myErrors.TEAM_TWO_IS_EMPTY)
      );
    }
    if (name === nameTeamOne) {
      setErrors((prevstate) => [...prevstate, myErrors.EQUALS_NAMES]);
    } else {
      setErrors((prevstate) =>
        prevstate.filter((err) => err !== myErrors.EQUALS_NAMES)
      );
    }
    setNameTeamTwo(name);
  };

  const handleGoToPlay = () => {
    setSection("game");
    setActualGameTime((prevState) => ({
      ...prevState,
      teamChange: nameTeamOne,
    }));
  };

  return (
    <>
      <div
        className={`InitSection__container InitSection__container--one ${
          section !== "init" ? "animation-one" : "animation-one-reverse"
        }`}
      >
        <InputName
          setNameTeam={handleSetNameOne}
          title="TEAM ONE"
          value={nameTeamOne}
        />
      </div>
      <div
        className={`InitSection__container InitSection__container--two ${
          section !== "init" ? "animation-two" : "animation-two-reverse"
        }`}
      >
        <InputName
          setNameTeam={handleSetNameTwo}
          title="TEAM TWO"
          value={nameTeamTwo}
        />
      </div>
      <Logo />
      <button
        type="button"
        disabled={errors.length > 0}
        className={`InitSection__button ${
          section !== "init" ? "animation-button-ok" : ""
        } `}
        onClick={handleGoToPlay}
      >
        GO
      </button>
      {errors.length > 0 && (
        <div className="InitSection__errors-container">
          {errors.map((err, index) => (
            <div className="error" key={index}>
              <img
                className="error__warning"
                alt="warning"
                src="https://www.flaticon.com/svg/vstatic/svg/1680/1680012.svg?token=exp=1619912935~hmac=c524d2991bd0610b6a21f7f3a6c6580c"
              />
              <span className="error__text">{err}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default InitSection;
