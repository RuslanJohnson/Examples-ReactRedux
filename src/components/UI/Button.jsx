import styled from "styled-components";

const StyledButton = styled.button.attrs((props) => ({
	color: props.color || "#5349d6",
	background: props.background || "white",
}))`
	font-size: 1em;
	padding: 0.25em 1em;
	margin: 0.25em;
	border-radius: 3px;
	border: 2px solid ${(props) => props.color};
	color: ${(props) => props.background};
	background-color: ${(props) => props.color};
	transition: 0.2s ease-in-out;

	&:hover {
		color: ${(props) => props.color};
		background-color: ${(props) => props.background};
	}
`;

const Button = (props) => {
	return <StyledButton {...props} />;
};

export default Button;
