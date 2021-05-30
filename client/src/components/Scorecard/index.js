import React, { useState, useEffect } from "react";
import Frame from '../Frame';
import FinalFrame from '../FinalFrame';
import './style.css';

function Scorecard(props) {

	const [scores, setScores] = useState([[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]);
	const [frameScores, setFrameScores] = useState([0]);

	function enterScores(frame, scoreData) {
		let prevScores = [...scores];
		prevScores[frame] = scoreData;
		setScores(prevScores);
	}

	function frame1(scoreData) {
		enterScores(0,scoreData);
	}
	function frame2(scoreData) {
		enterScores(1,scoreData);
	}
	function frame3(scoreData) {
		enterScores(2,scoreData);
	}
	function frame4(scoreData) {
		enterScores(3,scoreData);
	}
	function frame5(scoreData) {
		enterScores(4,scoreData);
	}
	function frame6(scoreData) {
		enterScores(5,scoreData);
	}
	function frame7(scoreData) {
		enterScores(6,scoreData);
	}
	function frame8(scoreData) {
		enterScores(7,scoreData);
	}
	function frame9(scoreData) {
		enterScores(8,scoreData);
	}
	function frame10(scoreData) {
		enterScores(9,scoreData);
	}

	useEffect(() => {
		let index = 0;
		const frames = [0];
        scores.forEach(frame => {
			if (index < 9) {
				let roll1 = frame[0];
				let roll2 = frame[1];
				//grabs roll 1 and 2 from the current frame and parses out numbers from data
				if (roll1 === "-" || roll1 === "") {
					roll1 = 0;
				}
				else {
					roll1 = parseInt(roll1);
				}
				if (roll2 === "-") {
					roll2 = 0;
				}
				else if (roll2 === "/") {
					console.log("spare");
				}
				else if (roll2 === "X") {
					console.log("strike");
				}
				else {
					roll2 = parseInt(roll2);
				}

				//spare logic
				if (roll2 === "/") {
					let nextRoll = parseInt(scores[index+1][0]);
					if (scores[index+1][1] === "X" || scores[index+1][0] === "X") {
						nextRoll = 10;
					}
					else if (isNaN(nextRoll)) {
						nextRoll = 0;
					}

					if (index === 0) {
						frames[index] = 10 + nextRoll;
					}
					else {
						frames[index] = frames[index-1] + 10 + nextRoll;
					} 
				}
				//strike logic
				else if (roll2 === "X") {
					let nextRoll = parseInt(scores[index+1][0]);
					let nextNextRoll = parseInt(scores[index+1][1]);
					if (index < 8) {
						if (isNaN(nextRoll)) {
							if (scores[index+1][0] === "-") {
								nextRoll = 0;
							}
							if (scores[index+1][0] === "X") {
								nextRoll = 10;
							}
						}
						if (isNaN(nextNextRoll)) {
							if (scores[index+1][1] === "-") {
								nextNextRoll = 0;
							}
							else if (scores[index+1][1] === "/") {
								nextNextRoll = 10 - nextRoll;
							}
							else if (scores[index+1][1] === "X") {
								nextRoll = 10;
								nextNextRoll = parseInt(scores[index+2][0]);
								if (scores[index+2][0] === "-") {
									nextNextRoll = 0;
								}
								else if (scores[index+2][0] === "X") {
									nextNextRoll = 10;
								}
								else if (scores[index+2][1] === "X") {
									nextNextRoll = 10;
								}
							}
						}
					}
					//9th frame strike logic
					else if (index === 8) {
						if (isNaN(nextRoll)) {
							if (scores[index+1][0] === "-") {
								nextRoll = 0;
							}
							if (scores[index+1][0] === "X") {
								nextRoll = 10;
							}
						}
						if (isNaN(nextNextRoll)) {
							if (scores[index+1][1] === "-") {
								nextNextRoll = 0;
							}
							if (scores[index+1][1] === "/") {
								nextNextRoll = 10 - nextRoll;
							}
							if (scores[index+1][1] === "X") {
								nextNextRoll = 10;
							}
						}		
					}
					if (index === 0) {
						frames[index] = 10 + nextRoll + nextNextRoll;
					}
					else {
						frames[index] = frames[index-1] + 10 + nextRoll + nextNextRoll;
					} 
				}
				//no marks logic
				else if (typeof(roll2) === "number") {
					if (index === 0) {
						frames[index] = roll1 + roll2;
					}
					else {
						frames[index] = frames[index-1] + roll1 + roll2;
					}
				}
			}
			//10th frame logic
			else {
				let roll1 = frame[0];
				let roll2 = frame[1];
				let roll3 = 0;
				
				if (roll1 === "X") {
					roll1 = 10;
				}
				else if (roll1 === "-") {
					roll1 = 0;
				}
				else {
					roll1 = parseInt(roll1);
				}
				
				if (roll2 === "X") {
					roll2 = 10;
				}
				else if (roll2 === "/") {
					roll2 = 10 - roll1;
				}
				else if (roll2 === "-") {
					roll2 = 0;
				}
				else {
					roll2 = parseInt(roll2);
				}

				if (frame[2] !== undefined) {
					roll3 = frame[2];
					if (roll3 === "X") {
						roll3 = 10;
					}
					else if (roll3 === "/") {
						roll3 = 10 - roll2;
					}
					else if (roll3 === "-") {
						roll3 = 0;
					}
					else {
						roll3 = parseInt(roll3);
					}
				}
				frames[index] =frames[index-1] + roll1 + roll2 + roll3;
			}
			index++;
		})
		setFrameScores(frames);
	}, [scores]);

	return (
		<div className="game">
            <Frame transferScore={frame1} score={frameScores[0]}/>
			<Frame transferScore={frame2} score={frameScores[1]}/>
			<Frame transferScore={frame3} score={frameScores[2]}/>
			<Frame transferScore={frame4} score={frameScores[3]}/>
			<Frame transferScore={frame5} score={frameScores[4]}/>
			<Frame transferScore={frame6} score={frameScores[5]}/>
			<Frame transferScore={frame7} score={frameScores[6]}/>
			<Frame transferScore={frame8} score={frameScores[7]}/>
			<Frame transferScore={frame9} score={frameScores[8]}/>
			<FinalFrame transferScore={frame10} score={frameScores[9]}/>
        </div>
	);
}

export default Scorecard;
