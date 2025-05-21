import { Dialog, type DialogProps } from "@mui/material";

interface CoreModalProps extends DialogProps {
	children: React.ReactNode;
}

const CoreModal = ({ children, ...props }: CoreModalProps) => {
	return <Dialog {...props}>{children}</Dialog>;
};

export default CoreModal;
