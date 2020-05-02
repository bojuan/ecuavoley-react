import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {  useSelector, useDispatch } from "react-redux";

import { setNameTeamOne } from "../redux/actions/teamOneAction";
import { setNameTeamTwo } from "../redux/actions/teamTwoAction";

import { Reducers } from '../redux/reducers/rootReducers';


const Init: FunctionComponent<{}> = (props) => {
  const reducers: Reducers = useSelector((state: Reducers) => state);
  const dispatchTeamOne = useDispatch();

  return (
    <div>
      <div>
        <h2>Equipo 1</h2>
        {reducers.teamOneReducer.name}
        <input type="text" value={reducers.teamOneReducer.name} onChange={(event) => {
            dispatchTeamOne(setNameTeamOne(event.target.value));
        }} />
        
      </div>
      <div>
        <h2>Equipo 2</h2>
        {reducers.teamTwoReducer.name}
        <input type="text" value={reducers.teamTwoReducer.name} onChange={(event) => {
            dispatchTeamOne(setNameTeamTwo(event.target.value));
        }}/>
      </div>
      <button>
        <Link to="/game">Comenzar</Link>
      </button>
    </div>
  );
};


export default Init;
