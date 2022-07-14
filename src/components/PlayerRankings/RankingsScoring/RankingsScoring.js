import React, {useEffect, useState} from 'react';
import styles from './RankingsScoring.module.css';
import Button from 'react-bootstrap/Button';


function RankingsScoring({setScoring}) {


    const [buttonStyle, setButtonStyle] = useState(["primary", "secondary"])

    useEffect(() => {
        if (buttonStyle[0] === "primary"){
            setScoring("PPR")
        }
        else {
            setScoring("FantPt")
        }
    },[buttonStyle])
    
    return (
        <div className={styles.main}>
            <Button className={styles.pprButton} onClick={() => setButtonStyle(["primary", "secondary"])} variant={buttonStyle[0]}>PPR</Button>
            <Button onClick={() => setButtonStyle(["secondary", "primary"])} variant={buttonStyle[1]}>STANDARD</Button>{' '}
        </div>
    );
}

export default RankingsScoring;