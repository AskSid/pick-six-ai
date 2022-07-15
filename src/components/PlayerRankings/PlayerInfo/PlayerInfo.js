import React, {useState} from 'react';
import styles from './PlayerInfo.module.css'

function PlayerInfo( {display, player, change, setChange} ) {

    const body = <div className={styles.main}> 
        <p>Name: {player.Player}</p>
        <p>PPR Points: {player.PPR}</p>
        <p>Standard Points: {player.FantPt}</p>
        <p>Standard Points: {player.FantPt}</p>
        <p>Standard Points: {player.FantPt}</p>
        <p>Standard Points: {player.FantPt}</p>
        <p>Standard Points: {player.FantPt}</p>
        <p>Standard Points: {player.FantPt}</p>
        <p>Standard Points: {player.FantPt}</p>
    </div>

    const checkChange = change ? body: null;
    //check if we want checkChange or display
    const doDisplay = display ? checkChange : null;

    return (
        <>

            {doDisplay}
        </>
    );

}

export default PlayerInfo;