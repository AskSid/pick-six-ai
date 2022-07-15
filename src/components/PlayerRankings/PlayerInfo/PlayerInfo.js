import React, {useState} from 'react';
import styles from './PlayerInfo.module.css'

function PlayerInfo( {display, player} ) {


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

    const doDisplay = display ? body : null;

    return (
        <>
            {doDisplay}
        </>
    );
}

export default PlayerInfo;