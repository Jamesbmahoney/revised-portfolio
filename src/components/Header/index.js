import React from "react";
import Navigation from "../Navigation";
import techBanner from "../../assets/images/tech_banner.jpg"

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header className="text-white" style={{ backgroundImage: `url(${techBanner})` }}>
			<div>
				<h2>James Portfolio</h2>
			</div>
			<div>
				<Navigation
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</header>
	);
}

export default Header;