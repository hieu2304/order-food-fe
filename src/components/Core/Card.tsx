import { Card, type CardProps } from "@mui/material";

interface CoreCardProps extends CardProps {
	children: React.ReactNode;
}

const CoreCard = (props: CoreCardProps) => {
	return <Card {...props}>{props.children}</Card>;
};

export default CoreCard;
