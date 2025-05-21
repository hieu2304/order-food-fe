import { Typography, type TypographyProps } from "@mui/material";

interface CoreTextProps extends TypographyProps {
	children: React.ReactNode;
}

const CoreText = ({ children, ...props }: CoreTextProps) => {
	return (
		<Typography
			{...props}
			sx={{ ...props?.sx, fontFamily: "Red Hat Text", letterSpacing: 0 }}
		>
			{children}
		</Typography>
	);
};

export default CoreText;
