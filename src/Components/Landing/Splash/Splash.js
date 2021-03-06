import React from 'react';

import Brand from "./features/Brand/Brand";
// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudSunRain} 	 from "@fortawesome/pro-duotone-svg-icons";
import './Splash.scss';
const Splash = () => {
	return (
		<div id="pageContainer">
			<header>
				<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
					<FontAwesomeIcon icon={faCloudSunRain} className="sunIcon" />
					<a className="navbar-brand" href="#">Sol Data Consulting</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
									aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Contact</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="#">Disabled</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Splash;