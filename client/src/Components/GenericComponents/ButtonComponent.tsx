import IF from "Components/GenericComponents/IF";
import { Button, Spinner } from "reactstrap";
import styled from "styled-components";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonText: string;
}

const StyledButton = styled(Button)`
	&:disabled {
		opacity: 1;
	}
`;

const ButtonComponent = ({ buttonText, ...rest }: IButton) => {
	return (
		<StyledButton {...rest} style={{ width: "10rem", display: "block", margin: "2em auto" }} color="primary">
			<IF predicate={!!rest.disabled}>
				<Spinner size="sm" color="light" />
			</IF>
			<IF predicate={!rest.disabled}>{buttonText}</IF>
		</StyledButton>
	);
};

export default ButtonComponent;
