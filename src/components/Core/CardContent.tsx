import { CardContent, type CardContentProps } from "@mui/material";

interface CoreCardContentProps extends CardContentProps {
	children: React.ReactNode;
}

const CoreCardContent = (props: CoreCardContentProps) => {
	return <CardContent {...props}>{props.children}</CardContent>;
};

export default CoreCardContent;
