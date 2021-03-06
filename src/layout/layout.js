// @ts-nocheck
import React from "react";
import useStyles from "./layoutStyles";
import { Container } from "@material-ui/core";
import Main from "../components/main/main";
import ChatRoom from "../components/chatRoom/chatRoom";

import RoomNavigation from "../components/roomNavigation/roomNavigation";
import logo from "./ROAST_logo.png";

function Layout() {
	const classes = useStyles();

	const [open, setOpen] = React.useState(true);

	const handleClose = () => {
		setOpen(false);
	};
	
	const [firstTime, setFirstTime] = React.useState(true);

	const handleSetFirstTime = () => {
		setFirstTime({
			firstTime: false,
		});
	}

	const [changeView, setChangeView] = React.useState(false);

	const handleChangeView = (enteredRoom) => {
		setChangeView(enteredRoom);
	};

	return (
		<Container maxWidth="md" className={classes.container}>
			<RoomNavigation changeView={handleChangeView} />

			<div className={classes.logoContainer}>
				<img src={logo} className={classes.logo} />
			</div>

			{changeView ? (
				<ChatRoom changeView={handleChangeView}/>
			) : (
				<Main 
				changeView={handleChangeView}
				handleSetFirstTime={handleSetFirstTime}
				firstTime={firstTime}
				handleClose={handleClose}
				open={open}
				 />
			)}
		</Container>
	);
}
export default Layout;
