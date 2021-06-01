import React, { useState, useEffect } from "react";
import './style.css';

function FinalFrame(props) {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    function handleInput1Change(event) {
		let roll1 = event.target.value;
		setScore1(roll1);
        if (score2 === "X") {
            setScore2("");
        }
	}

    function handleInput2Change(event) {
		let roll2 = event.target.value;
		setScore2(roll2);
        if (roll2 === "X") {
            setScore1("");
        }
	}

    useEffect(() => {
        let scoreData = [score1, score2];
		props.transferScore(scoreData);
	}, [score1, score2]);

	return (
		<div className="bowlingFrame">
            <select onChange={handleInput1Change} placeholder={score1} value={score1} type="select" name="roll-1" >
                <option>  </option>
                <option> - </option>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
                <option> 6 </option>
                <option> 7 </option>
                <option> 8 </option>
                <option> 9 </option>
            </select>
            <select onChange={handleInput2Change} placeholder="" value={score2} type="select" name="roll-1" >
                <option> - </option>
                {(score1 < 9 || score1 === "-") && (<option> 1 </option>)}
                {(score1 < 8 || score1 === "-") && (<option> 2 </option>)}
                {(score1 < 7 || score1 === "-") && (<option> 3 </option>)}
                {(score1 < 6 || score1 === "-") && (<option> 4 </option>)}
                {(score1 < 5 || score1 === "-") && (<option> 5 </option>)}
                {(score1 < 4 || score1 === "-") && (<option> 6 </option>)}
                {(score1 < 3 || score1 === "-") && (<option> 7 </option>)}
                {(score1 < 2 || score1 === "-") && (<option> 8 </option>)}
                {(score1 < 1 || score1 === "-") && (<option> 9 </option>)}
                <option> / </option>
                <option> X </option>
            </select>
            <p>{props.score}</p>
        </div>
	);
}

export default FinalFrame;