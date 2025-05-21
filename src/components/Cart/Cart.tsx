import type React from "react";
import type { ProductItem } from "@/utils/types";

import {
	Button,
	CardContent,
	CardMedia,
	Typography,
	Card,
	Box,
} from "@/components/Core";
import { styledCart } from "./Cart.styled";
import { colors } from "@/theme/color";

const cartIcon = "/icon/shopping-cart.svg";
const minusIcon = "/icon/minus.svg";
const plusIcon = "/icon/plus.svg";

interface CartProps {
	item: ProductItem;
	onAddToOrder: (item: ProductItem) => void;
	quantity: number;
	handleDecrease: () => void;
	handleIncrease: () => void;
}

const Cart: React.FC<CartProps> = ({
	item,
	onAddToOrder,
	quantity,
	handleDecrease,
	handleIncrease,
}) => (
	<Card sx={styledCart}>
		<Box sx={{ position: "relative", alignItems: "center" }}>
			<CardMedia
				component="img"
				image={item.image.desktop}
				sx={{
					borderRadius: 3,
					width: "100%",
					height: 240,
					objectFit: "cover",
					mb: 2,
				}}
			/>
			{quantity > 0 ? (
				<Box
					sx={{
						position: "absolute",
						color: colors.secondary,
						background: colors.primary,
						borderRadius: 999,
						bottom: 0,
						width: 144,
						height: 28,
						padding: "8px",
						left: "15%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<button
						type="button"
						onClick={handleDecrease}
						tabIndex={0}
						className="button-none"
						aria-label="Decrease quantity"
					>
						<img src={minusIcon} alt="minus" />
					</button>
					<div>{quantity}</div>
					<button
						type="button"
						onClick={handleIncrease}
						tabIndex={0}
						className="button-none"
						aria-label="Increase quantity"
					>
						<img src={plusIcon} alt="plus" />
					</button>
				</Box>
			) : (
				<Box
					sx={{
						position: "absolute",
						left: "15%",
						bottom: 0,
						zIndex: 2,
						width: 160,
						height: 44,
					}}
				>
					<Button
						variant="outlined"
						startIcon={<img src={cartIcon} alt="cart" />}
						sx={{
							width: "100%",
							height: "100%",
							borderRadius: 999,
							background: colors.backgroundWhite,
							borderColor: colors.border,
							color: colors.primary,
							"&:hover": {
								background: colors.backgroundLightHover,
								borderColor: colors.colorPrimaryHover,
							},
						}}
						onClick={() => onAddToOrder(item)}
					>
						Add to Cart
					</Button>
				</Box>
			)}
		</Box>
		<CardContent sx={{ p: 0, width: "100%" }}>
			<Typography
				variant="caption"
				color={colors.textLight}
				sx={{ display: "block", mb: 0.5 }}
			>
				{item.category}
			</Typography>
			<Typography
				variant="subtitle1"
				sx={{
					mb: 0.5,
					color: colors.textMain,
					fontSize: "16px",
					fontWeight: 600,
				}}
			>
				{item.name}
			</Typography>
			<Typography
				variant="subtitle2"
				color="error"
				sx={{ fontWeight: 400, color: colors.accent }}
			>
				${item.price.toFixed(2)}
			</Typography>
		</CardContent>
	</Card>
);

export default Cart;
