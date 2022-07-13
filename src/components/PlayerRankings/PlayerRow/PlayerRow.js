import React from 'react';
import styles from './PlayerRow.module.css'

function PlayerRow({rank, playerName, team}) {
    return (
        <div className={styles.main}>
            <div> 
                <p className={styles.haha}>{rank}</p> 
            </div>
            <div> 
                <p className={styles.haha}>{playerName}</p> 
            </div>
            <div>
                <p className={styles.haha}>{team}</p> 
            </div>

        </div>
    );
}

export default PlayerRow;