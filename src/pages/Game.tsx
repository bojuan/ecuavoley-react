import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';


import { Reducers } from '../redux/reducers/rootReducers';
import ScoreBoard from '../components/ScoreBoard';

const Game: FunctionComponent<{}> = (props) => {
    const reducer: Reducers = useSelector((state: Reducers) => state);
    return(
        <div>
            <div>Tiempo: { reducer.timeReducer.time }</div>
            <div>Hasta: { reducer.timeReducer.limitScore }</div>
            <div>
                
                {reducer.teamOneReducer.name}
                <ScoreBoard limit={reducer.timeReducer.limitScore} score={reducer.teamOneReducer.scoreFirstTime} />
            </div>
            <div>
                
                {reducer.teamTwoReducer.name}
                <ScoreBoard limit={reducer.timeReducer.limitScore} score={reducer.teamTwoReducer.scoreFirstTime} />
            </div>
        </div>
    );
}


export default Game;