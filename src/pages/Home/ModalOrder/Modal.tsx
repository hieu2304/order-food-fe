import type { IModalOrderProps } from "@/utils/types";

import { Dialog, Typography, Button } from "@/components/Core";
import { colors } from "@/theme/color";
import { Container } from "./Modal.styled";
import { formatFloatWithComma } from "@/utils/string";

const checkedIcon = "/icon/checked.svg";

const ModalOrder = (props: IModalOrderProps) => {
	const { isOpen, onClose, order, totalPrice } = props;
	return (
		<Dialog open={isOpen} onClose={onClose}>
			<Container>
				<img src={checkedIcon} alt="checked" className="checked-icon" />
				<div className="order-confirmed-container">
					<Typography
						variant="h6"
						color={colors.textDark}
						sx={{
							fontWeight: 600,
							fontSize: "40px",
							m: 0,
							p: 0,
						}}
					>
						Order Confirmed
					</Typography>
					<Typography
						variant="subtitle1"
						color={colors.textGray}
						sx={{
							fontWeight: 400,
							fontSize: "15px",
						}}
					>
						We hope you enjoy your food!
					</Typography>
				</div>
				<div className="order-details-container">
					{order.items.map((item) => (
						<div className="order-details-item-container" key={item.product.id}>
							<div className="order-details-item">
								<div className="order-image-container">
									<img
										src={item.product.image.thumbnail}
										alt={item.product.name}
										className="img-product"
									/>
									<div className="product-detail">
										<Typography
											sx={{
												fontSize: "12px",
												color: colors.textGrayBrown,
											}}
										>
											{item.product.name}
										</Typography>
										<div className="product-price">
											<Typography
												sx={{
													fontSize: "13px",
													color: colors.textRedLight,
												}}
											>{`${item.quantity}x`}</Typography>
											<Typography
												sx={{
													fontSize: "11px",
													color: colors.textGrayLight,
												}}
											>
												{`@ $${formatFloatWithComma(item.product.price)}`}
											</Typography>
										</div>
									</div>
								</div>
								<Typography
									sx={{
										fontSize: "15px",
										color: colors.textCharcoalBrown,
									}}
								>{`$${formatFloatWithComma(item.product.price * item.quantity)}`}</Typography>
							</div>
							<div className="divider" />
						</div>
					))}
					<div className="order-total">
						<Typography
							variant="h6"
							color={colors.colorWarmGrayLight}
							sx={{ fontSize: "13px" }}
						>
							Order Total
						</Typography>
						<Typography
							variant="h6"
							color={colors.textDarkShadow}
							sx={{ fontSize: "23px" }}
						>
							${formatFloatWithComma(totalPrice || 0)}
						</Typography>
					</div>
				</div>
				<div className="button-container">
					<Button
						variant="contained"
						sx={{
							width: "100%",
							color: colors.textRedLow,
							backgroundColor: colors.buttonRed,
							"&:hover": {
								backgroundColor: colors.buttonRed,
							},
							padding: "10px",
							borderRadius: "999px",
						}}
						onClick={onClose}
					>
						Start New Order
					</Button>
				</div>
			</Container>
		</Dialog>
	);
};

export default ModalOrder;
