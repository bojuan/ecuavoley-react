import { FunctionComponent } from "react";

const InputName: FunctionComponent<{
  setNameTeam: (name: string) => void;
  title: string;
  value: string;
}> = ({ setNameTeam, title, value }) => {
  return (
    <div className="inputName">
      <div className="inputName__header">{title}</div>
      <div className="inputName__container">
        <input
          className="inputName__input"
          value={value}
          onChange={(e) => {
            setNameTeam(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default InputName;
