import { FunctionComponent } from "react";

const LimitGameTime: FunctionComponent<{
  limit: number;
  setLimit: () => void;
  time: "first" | "second" | "third";
}> = ({ limit, setLimit, time }) => {
    
  return (
    <div className="limit">
      <div>
        <b>{time.toUpperCase()} TIME</b>
      </div>
      <div className="limit__container" >{limit}</div>
    </div>
  );
};

export default LimitGameTime;
