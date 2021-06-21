import styled from "styled-components";
import UnderConstructionPage from "./pages/UnderConstructionPage";

function App() {
	return (
		<AppWrapper>
			<UnderConstructionPage />
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	height: 100vh;
	width: 100vw;

`;
