import React, { useState, useEffect } from "react";
import './style.css';

function Frame(props) {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [score3, setScore3] = useState(0);

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
	}

    function handleInput3Change(event) {
		let roll3 = event.target.value;
        setScore3(roll3);
	}

    useEffect(() => {
        let scoreData = [score1, score2, score3];
		props.transferScore(scoreData);
	}, [score1, score2, score3]);

	return (
		<div className="finalFrame">
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
                <option> X </option>
            </select>
            <select onChange={handleInput2Change} placeholder="" value={score2} type="select" name="roll-1" >
                <option> - </option>
                {(score1 < 9 || (score1 === "-" || score1 === "X")) && (<option> 1 </option>)}
                {(score1 < 8 || (score1 === "-" || score1 === "X")) && (<option> 2 </option>)}
                {(score1 < 7 || (score1 === "-" || score1 === "X")) && (<option> 3 </option>)}
                {(score1 < 6 || (score1 === "-" || score1 === "X")) && (<option> 4 </option>)}
                {(score1 < 5 || (score1 === "-" || score1 === "X")) && (<option> 5 </option>)}
                {(score1 < 4 || (score1 === "-" || score1 === "X")) && (<option> 6 </option>)}
                {(score1 < 3 || (score1 === "-" || score1 === "X")) && (<option> 7 </option>)}
                {(score1 < 2 || (score1 === "-" || score1 === "X")) && (<option> 8 </option>)}
                {(score1 < 1 || (score1 === "-" || score1 === "X")) && (<option> 9 </option>)}
                {(score1 !== "X") && (<option> / </option>)}
                {(score1 === "X") && <option> X </option>}
            </select>
            {(score1 === "X" || score2 === "/") &&
                (<select onChange={handleInput3Change} placeholder="" value={score3} type="select" name="roll-1" >
                <option> - </option>
                {(score2 < 9 || (score2 === "/" || score2 === "X")) && (<option> 1 </option>)}
                {(score2 < 8 || (score2 === "/" || score2 === "X")) && (<option> 2 </option>)}
                {(score2 < 7 || (score2 === "/" || score2 === "X")) && (<option> 3 </option>)}
                {(score2 < 6 || (score2 === "/" || score2 === "X")) && (<option> 4 </option>)}
                {(score2 < 5 || (score2 === "/" || score2 === "X")) && (<option> 5 </option>)}
                {(score2 < 4 || (score2 === "/" || score2 === "X")) && (<option> 6 </option>)}
                {(score2 < 3 || (score2 === "/" || score2 === "X")) && (<option> 7 </option>)}
                {(score2 < 2 || (score2 === "/" || score2 === "X")) && (<option> 8 </option>)}
                {(score2 < 1 || (score2 === "/" || score2 === "X")) && (<option> 9 </option>)}
                {((score1 === "X" && score2 !== "X") && <option> / </option>)}
                {(score2 === "X" || score2 === "/") && (<option> X </option>)}
            </select>)
            }
            <p>{props.score}</p>
        </div>
	);
}

export default Frame;