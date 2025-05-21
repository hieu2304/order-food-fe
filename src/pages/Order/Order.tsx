import type { IOrder } from "@/utils/types";
import { Button, Typography } from "@/components/Core";
import { Container } from "./Order.styled";
import { formatFloatWithComma } from "@/utils/string";
import { colors } from "@/theme/color";

const CakeIcon = "/icon/cake.svg";
const DeleteIcon = "/icon/delete.svg";
const TreeIcon = "/icon/tree.svg";

interface IOrderProps {
	items: IOrder["items"];
	total: IOrder["total"];
	onOpenConfirm: () => void;
	totalPrice: number;
}

const Order = (props: IOrderProps) => {
	const { items, total, onOpenConfirm, totalPrice } = props;

	return (
		<Container>
			<Typography
				variant="subtitle1"
				sx={{ fontWeight: 500, color: colors.textOrange, fontSize: "23.2px" }}
			>
				{`Your Cart (${total})`}
			</Typography>
			{total > 0 ? (
				<div className="order-list-container">
					<div className="order-list">
						{items.map((item) => (
							<div key={item.product.id} className="order-item">
								<Typography color={colors.colorWarmGray}>
									{item.product.name}
								</Typography>
								<div className="order-item-quantity">
									<div className="order-item-quantity-info">
										<Typography
											color="#C88F79"
											fontSize={"13px"}
										>{`${item.quantity}x`}</Typography>
										<Typography
											color="#B5ABAA"
											fontSize={"13px"}
										>{`@${formatFloatWithComma(item.product.price)} $${formatFloatWithComma(item.product.price * item.quantity)}`}</Typography>
									</div>
									<button type="button" className="button-none ">
										<img src={DeleteIcon} alt="trash" />
									</button>
								</div>
								<div className="divider" />
							</div>
						))}
					</div>
					<div className="order-total">
						<Typography
							variant="body1"
							sx={{
								fontWeight: 400,
								color: colors.colorWarmShadow,
								fontSize: 16,
							}}
						>
							Order Total
						</Typography>
						<Typography
							variant="h4"
							sx={{
								fontWeight: 600,
								color: colors.colorCocoaShadow,
								fontSize: "22px",
							}}
						>
							${formatFloatWithComma(totalPrice)}
						</Typography>
					</div>
					<div className="delivery-info">
						<img src={TreeIcon} alt="tree" />
						<Typography
							variant="body1"
							sx={{ fontWeight: 400, color: colors.textMuted, fontSize: 12 }}
						>
							This is a{" "}
							<strong style={{ fontWeight: 700 }}>carbon-neutral</strong>{" "}
							delivery
						</Typography>
					</div>
					<div className="order-button">
						<Button
							variant="contained"
							sx={{
								borderRadius: 10,
								height: 53,
								width: "100%",
								color: colors.textOrangeLight,
								backgroundColor: colors.buttonRed,
								"&:hover": {
									backgroundColor: colors.buttonRed,
								},
							}}
							onClick={onOpenConfirm}
						>
							Confirm Order
						</Button>
					</div>
				</div>
			) : (
				<div className="no-result">
					<img src={CakeIcon} alt="cake" />
					<Typography
						variant="body1"
						sx={{ fontWeight: 400, color: "#988A87" }}
					>
						Your add item will appear here
					</Typography>
				</div>
			)}
		</Container>
	);
};

export default Order;
