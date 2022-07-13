import React, { useState } from 'react';
import playersJson from '../../../players.json'
import PlayerRow from '../PlayerRow/PlayerRow';
import RankingsSelect from '../RankingsSelect/RankingsSelect';
import styles from './Rankings.module.css'

function Rankings(props) {
    const allPlayers = JSON.parse(JSON.stringify(playersJson));

    const [currentPos, setCurrentPos] = useState(["RB"])

    var posRank = {
        QB: 0,
        RB: 0,
        WR: 0,
        TE: 0,
        K: 0,
        DEF: 0
    };

    const rb = allPlayers.filter((p) => currentPos.includes(p.FantPos));



    return (
        <div className={styles.body}>
            <RankingsSelect setPosition={setCurrentPos}/>
            {rb.map((p) => <PlayerRow 
                rank ={p.FantPos + ++posRank[p.FantPos]} 
                playerName={p.Player}
                team = {p.Tm}
            />)}
        </div>
        );
    }   

export default Rankings;