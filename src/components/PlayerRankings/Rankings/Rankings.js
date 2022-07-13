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

    var num = 0;

    const players = allPlayers.filter((p) => currentPos.includes(p.FantPos));

    function GetSortOrder(prop) {    
        return function(a, b) {    
            if (a[prop] < b[prop]) {    
                return 1;    
            } else if (a[prop] > b[prop]) {    
                return -1;    
            }    
            return 0;    
        }    
    }    

    players.sort(GetSortOrder('PPR'))

    return (
        <div className={styles.body}>
            <RankingsSelect setPosition={setCurrentPos}/>
            {players.map((p) => <PlayerRow 
                rank ={p.FantPos + ++posRank[p.FantPos]} 
                playerName={p.Player}
                team = {p.Tm}
                num = {num++}
            />)}
        </div>
        );
    }   

export default Rankings;