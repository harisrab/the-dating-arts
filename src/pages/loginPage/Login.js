import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import { auth } from "../../firebase";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { useStateValue } from "../../Store/StateProvider";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

function Login() {
	const [{ _ }, dispatch] = useStateValue();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [emailValid, setEmailValid] = useState("");
	const [passwordValid, setPasswordValid] = useState("");

	const [showError, setShowError] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const googleProvider = new firebase.auth.GoogleAuthProvider();

	const history = useHistory();

	const handleEmailChange = (e) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		console.log(
			"Re Test ===> ",
			re.test(String(e.target.value).toLowerCase())
		);
		setEmail(e.target.value);

		if (re.test(String(e.target.value).toLowerCase())) {
			setEmailValid(true);
		} else {
			setEmailValid(false);
		}
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);

		if (String(e.target.value).length < 16) {
			setPasswordValid(false);
		} else {
			setPasswordValid(true);
		}
	};

	const signInWithGoogle = () => {
		auth.signInWithPopup(googleProvider)
			.then((res) => {
				dispatch({
					type: "SET_USER",
					payload: res,
				});
				history.goBack();
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const signInUser = () => {
		if (emailValid && passwordValid) {
			setShowError(false);
			auth.signInWithEmailAndPassword(email, password)
				.then((auth) => {
					setSuccessMessage("User logged in successfully!");
					setShowSuccess(true);
					setShowError(false);
					dispatch({
						type: "SET_USER",
						payload: auth,
					});

					history.push("/profile");
				})
				.catch((error) => {
					if (error.code === "auth/user-not-found") {
						setErrorMessage("Please register your account!");
						setShowSuccess(false);
						setShowError(true);
					} else if (error.code === "auth/wrong-password") {
						setErrorMessage("Password is not correct!");
						setShowSuccess(false);
						setShowError(true);
					}

					console.log("Authentication Sign In Error ====> ", error);
				});
		} else if (!emailValid || !passwordValid) {
			setErrorMessage("Check your credentials!");
			setShowError(true);
		}
	};

	const registerUser = () => {
		if (emailValid && passwordValid) {
			setShowError(false);
			auth.createUserWithEmailAndPassword(email, password)
				.then((auth) => {
					// Successfully created a new account
					setSuccessMessage("Account created successfully!");
					setShowSuccess(true);
					setShowError(false);

					dispatch({
						type: "SET_USER",
						payload: auth,
					});

					history.push("/profile");
				})
				.catch((error) => {
					// Failed to create a new account
					if (error.code === "auth/email-already-in-use") {
						setErrorMessage("Email already in use!");
						setShowSuccess(false);
						setShowError(true);
					} else {
						console.log(
							"Error while registering account ===> ",
							error
						);
					}
					// auth/email-already-in-use
				});
		} else if (!emailValid || !passwordValid) {
			setErrorMessage("Check your credentials!");
			setShowSuccess(false);
			setShowError(true);
		}
	};

	useEffect(() => {
		console.log("Email =====> ", email);
		console.log("Password =====> ", password);
	}, [email, password]);

	return (
		<Wrapper>
			<div className="inside">
				<h2>Become a Member</h2>
				<ErrorBlock error={showError}>
					<ErrorWrapper />
					<p>{errorMessage}</p>
				</ErrorBlock>
				<SuccessBlock error={showSuccess}>
					<SuccessWrapper />
					<p>{successMessage}</p>
				</SuccessBlock>
				<form action="">
					<div className="email-holder">
						<EmailIconWrapper />
						<input
							type="text"
							className="email"
							placeholder="E-mail"
							onChange={handleEmailChange}
							value={email}
							style={
								email === ""
									? { borderColor: "white" }
									: emailValid === true
									? { borderColor: "green" }
									: { borderColor: "red" }
							}
						/>
					</div>
					<div className="password-holder">
						<PassIconWrapper />
						<input
							type="password"
							className="password"
							placeholder="Password"
							onChange={handlePasswordChange}
							value={password}
							style={
								password === ""
									? { borderColor: "white" }
									: passwordValid === true
									? { borderColor: "green" }
									: { borderColor: "red" }
							}
						/>
					</div>

					<div className="btns">
						<SignInButton onClick={signInUser}>
							Sign In
						</SignInButton>
						<RegisterButton onClick={registerUser}>
							Register
						</RegisterButton>
					</div>
				</form>

				<p className="forgotPass">
					<a href="">Forgot password?</a>
				</p>
				<div className="googleauthwrapper">
					<GoogleAuthButton
						variant="outlined"
						onClick={signInWithGoogle}
					>
						<img src="/search.svg" alt="" />
						<p>Sign in with Google</p>
					</GoogleAuthButton>
				</div>
			</div>
		</Wrapper>
	);
}

export default Login;

const Wrapper = styled.div`
	height: auto;
	padding-top: 20px;
	padding-bottom: 30px;
	border: 0.5px white solid;
	border-radius: 5px;

	transition: 0.3s ease-out;

	width: 300px;

	display: flex;
	align-items: center;
	justify-content: center;

	font-family: "Spectral", sans-serif;

	.inside {
		width: 90%;
		color: white;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		h2 {
			font-weight: 200;
			font-size: 30px;
			margin-bottom: 10px;
		}

		.forgotPass {
			margin-top: 20px;

			a {
				font-weight: 300;
				text-decoration: underline dotted;
				color: gray;
				transition: 0.3s;

				&:hover {
					cursor: pointer;
					color: #a1a1a1;
				}
			}

			margin-bottom: 20px;
		}

		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			margin-top: 10px;

			.email-holder {
				width: 100%;
				height: auto;
				position: relative;

				.email {
					width: 90%;
					margin: 10px;
					height: 40px;
					border-radius: 5px;
					outline: none;
					border: 1px solid white;
					background-color: transparent;
					padding-left: 40px;
					font-family: "Spectral", sans-serif;
					color: white;
					margin-bottom: 0px;
				}
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.password-holder {
				position: relative;
				width: 100%;
				height: auto;

				display: flex;
				align-items: center;
				justify-content: center;

				.password {
					width: 90%;
					margin: 10px;
					height: 40px;
					border-radius: 5px;
					outline: none;
					border: 1px solid white;
					background-color: transparent;
					padding-left: 40px;
					font-family: "Spectral", sans-serif;
					color: white;
				}
			}

			.btns {
				width: 90%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 10px;

				.sign-in {
					height: 35px;
					width: 45%;
					border: 1px solid var(--main-color-white);
					background-color: var(--main-color-white);
					color: black;
					font-family: "Spectral", sans-serif;
					font-size: 15px;
					font-weight: 300;
					border-radius: 5px;

					&:hover {
						cursor: pointer;
					}

					&:focus {
						box-shadow: 0 0 0pt 1pt red;
					}
				}

				.register {
					height: 35px;
					width: 45%;
					border: 1px solid var(--main-color-red);
					background-color: var(--main-color-red);
					color: white;
					font-family: "Spectral", sans-serif;
					font-size: 15px;
					font-weight: 300;
					border-radius: 5px;

					&:hover {
						cursor: pointer;
					}

					&:focus {
						box-shadow: 0 0 0pt 1pt white;
					}
				}
			}
		}
	}

	.googleauthwrapper {
		position: relative;

		height: auto;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const EmailIconWrapper = styled(EmailIcon)`
	position: absolute;
	top: 58%;
	transform: translateY(-50%);
	font-size: 18px !important;
	left: 25px;
	color: gray;
`;
const PassIconWrapper = styled(LockIcon)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	font-size: 18px !important;
	left: 25px;
	color: gray;
`;

const SignInButton = styled(Button)`
	height: 35px;
	width: 45%;
	/* border: 1px solid var(--main-color-white); */
	background-color: var(--main-color-white) !important;
	font-family: "Spectral", sans-serif !important;
	font-size: 15px !important;
	font-weight: 300 !important;
	text-transform: capitalize !important;
	/* border-radius: 5px; */

	color: black !important;
`;

const RegisterButton = styled(Button)`
	height: 35px;
	width: 45%;
	/* border: 1px solid var(--main-color-white); */
	background-color: var(--main-color-red) !important;
	font-family: "Spectral", sans-serif !important;
	font-size: 15px !important;
	font-weight: 300 !important;
	text-transform: capitalize !important;
	/* border-radius: 5px; */

	color: white !important;
`;

const GoogleAuthButton = styled(Button)`
	height: 35px;
	width: 90%;
	/* border: 1px solid var(--main-color-white); */
	background-color: #00388b65 !important;
	border: 0.1px solid #005ae0 !important;
	/* border-radius: 5px; */

	position: relative;

	img {
		position: absolute;
		height: 15px;
		left: 20px;
		top: 50%;
		transform: translateY(-50%);
	}

	p {
		color: #e7e7e7 !important;
		font-family: "Spectral", sans-serif !important;
		font-size: 14px !important;
		font-weight: 300 !important;
		text-transform: capitalize !important;

		margin-left: 20px;
	}
`;

const ErrorBlock = styled.div`
	height: 35px;
	width: 90%;
	background-color: #80000037;
	border: 0.5px solid var(--main-color-red);

	border-radius: 5px;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	p {
		font-size: 12px;
		font-weight: 300;
		margin-left: 10px;
		color: red;
	}

	display: ${(props) => (props.error ? "flex" : "none")};
`;

const ErrorWrapper = styled(ErrorOutlineIcon)`
	font-size: medium !important;
	color: red;
	margin-left: 10px;
`;

const SuccessBlock = styled.div`
	height: 35px;
	width: 90%;
	background-color: #00bd001d;
	border: 0.5px solid #00bd00;

	border-radius: 5px;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	p {
		font-size: 12px;
		font-weight: 300;
		margin-left: 10px;
		color: #00bd00;
	}

	display: ${(props) => (props.error ? "flex" : "none")};
`;

const SuccessWrapper = styled(CheckCircleOutlineIcon)`
	font-size: medium !important;
	color: #00bd00;
	margin-left: 10px;
`;
