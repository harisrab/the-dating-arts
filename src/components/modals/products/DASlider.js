import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const DASlider = withStyles({
	root: {
		color: "var(--main-color-black)",
		height: 2,
		padding: "15px 0",
	},
	thumb: {
		height: 10,
		width: 10,
		backgroundColor: "black",
		marginTop: -4,
		marginLeft: -4,
	},
	active: {},
	valueLabel: {
		left: "calc(-2% - 10.5px)",
		top: -35,
		"& *": {
			background: "black",
			color: "#ffffff",
		},
	},
	track: {
		height: 2,
	},
	rail: {
		height: 2,
		opacity: 0.5,
		backgroundColor: "#bfbfbf",
	},
	mark: {
		backgroundColor: "white",
		height: 8,
		width: 2,
		marginTop: -3,
	},
	markActive: {
		opacity: 1,
		backgroundColor: "white",
	},
})(Slider);

export default DASlider;
