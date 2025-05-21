import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

interface CoreButtonProps extends ButtonProps {
	children?: React.ReactNode;
}

const CoreButton = ({ children, ...props }: CoreButtonProps) => {
	return (
		<Button
			{...props}
			sx={{
				...props?.sx,
				fontFamily: "Red Hat Text",
				letterSpacing: 0,
				textTransform: "none",
			}}
		>
			{children}
		</Button>
	);
};

export default CoreButton;
