import React, { useEffect, useState, useMemo } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useMediaQuery } from "@mui/material";

import type { IOrder, ProductItem } from "@/utils/types";

import { Cart } from "@/components/Cart";
import { getProducts } from "@/api/product";
import { Typography, Grid } from "@/components/Core";
import {
	Container,
	LoadingWrapper,
	RightSection,
	LeftSection,
} from "./Home.styled";
import Order from "./Order";
import ModalOrder from "./ModalOrder";
import DrawerOrder from "./DrawerOrder";

const Home = () => {
	const [products, setProducts] = useState<ProductItem[]>([]);
	const [order, setOrder] = useState<IOrder>({
		total: 0,
		items: [],
	});
	const [loading, setLoading] = useState(true);
	const [isOpenConfirm, setIsOpenConfirm] = useState(false);

	const isMobile = useMediaQuery("(max-width: 768px)");

	useEffect(() => {
		setLoading(true);
		getProducts().then((data) => {
			setProducts(data);
			setLoading(false);
		});
	}, []);

	const handleAddToOrder = (product: ProductItem) => {
		const item = order.items.find((item) => item.product.id === product.id);
		if (item) {
			setOrder((prev) => ({
				...prev,
				total: prev.total + 1,
				items: prev.items.map((i) =>
					i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
				),
			}));
		} else {
			setOrder((prev) => ({
				...prev,
				total: prev.total + 1,
				items: [...prev.items, { product, quantity: 1 }],
			}));
		}
	};

	const handleDecrease = (product: ProductItem) => {
		setOrder((prev) => {
			const existingItem = prev.items.find(
				(item) => item.product.id === product.id,
			);
			if (!existingItem) return prev;
			return {
				...prev,
				total: prev.total - 1,
				items: prev.items
					.map((item) =>
						item.product.id === product.id
							? { ...item, quantity: item.quantity - 1 }
							: item,
					)
					.filter((item) => item.quantity > 0),
			};
		});
	};

	const handleIncrease = (product: ProductItem) => {
		setOrder((prev) => {
			const existingItem = prev.items.find(
				(item) => item.product.id === product.id,
			);
			if (!existingItem) return prev;
			return {
				...prev,
				total: prev.total + 1,
				items: prev.items.map((item) =>
					item.product.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				),
			};
		});
	};

	const handleOpenConfirm = () => {
		setIsOpenConfirm(true);
	};

	const handleCloseConfirm = () => {
		setIsOpenConfirm(false);
		setOrder({
			total: 0,
			items: [],
		});
	};

	const totalPrice = useMemo(() => {
		return order.items.reduce(
			(acc, item) => acc + item.product.price * item.quantity,
			0,
		);
	}, [order.items]);

	if (loading) {
		return (
			<LoadingWrapper>
				<CircularProgress />
			</LoadingWrapper>
		);
	}

	return (
		<Container>
			<RightSection>
				<Order
					items={order.items}
					total={order.total}
					totalPrice={totalPrice}
					onOpenConfirm={handleOpenConfirm}
				/>
				{isMobile ? (
					<DrawerOrder
						totalPrice={totalPrice}
						isOpen={isOpenConfirm}
						onClose={handleCloseConfirm}
						order={order}
					/>
				) : (
					<ModalOrder
						totalPrice={totalPrice}
						isOpen={isOpenConfirm}
						onClose={handleCloseConfirm}
						order={order}
					/>
				)}
			</RightSection>
			<LeftSection>
				<div className="product-list">
					<Typography variant="h4" sx={{ mb: 2, fontSize: "36.8px" }}>
						Desserts
					</Typography>
					<Grid container spacing={0} maxWidth={950} width="100%">
						{products.map((product) => (
							<Grid item xs={12} sm={6} md={4} key={product.id}>
								<Cart
									item={product}
									onAddToOrder={handleAddToOrder}
									quantity={
										order.items.find((item) => item.product.id === product.id)
											?.quantity || 0
									}
									handleDecrease={() => handleDecrease(product)}
									handleIncrease={() => handleIncrease(product)}
								/>
							</Grid>
						))}
					</Grid>
				</div>
			</LeftSection>
		</Container>
	);
};

export default Home;
