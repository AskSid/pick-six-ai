import React, {useEffect, useState} from 'react';
import styles from './RankingsScoring.module.css';
import Button from 'react-bootstrap/Button';


function RankingsScoring({setScoring}) {


    const [buttonStyle, setButtonStyle] = useState(["primary", "light"])

    useEffect(() => {
        if (buttonStyle[0] === "primary"){
            setScoring("PPR")
        }
        else {
            setScoring("FantPt")
        }
    }, [buttonStyle])
    
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Scoring</h1>
            <Button 
                className={styles.pprButton} 
                onClick={() => setButtonStyle(["primary", "light"])} 
                variant={buttonStyle[0]}
                size="lg">
                    PPR
            </Button>
            <Button 
                onClick={() => setButtonStyle(["light", "primary"])} 
                variant={buttonStyle[1]}
                size="lg">
                    Standard
            </Button>
        </div>
    );
}

export default RankingsScoring;