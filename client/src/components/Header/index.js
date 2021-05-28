import React, { useState } from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKing, faHeart, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {

	return (
		<>
			<header>
				<nav>
					<ul className="nav">
						<li className="play-game">
							<Link to="/play">
								<FontAwesomeIcon icon={faGamepad} />
							PlayGame
						</Link>
						</li>
						<li className="high-scores">
							<Link to="/high-scores">
								<FontAwesomeIcon icon={faChessKing} />
							High Scores
						</Link>
						</li>
					</ul>
				</nav>

			</header>
		</>
	);
}

export default Header;
