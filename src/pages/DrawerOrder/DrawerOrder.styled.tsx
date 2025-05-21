import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;

    .checked-icon {
        width: 42px;
        height: 42px;
    }

    .order-confirmed-container {
        display: flex;
        flex-direction: column;
        padding: 16px;
        
    }

    .order-details-container {
        display: flex;
        flex-direction: column;
        border-radius: 8px;   
        background-color: ${({ theme }) => theme.colors.backgroundLight};
        gap: 8px;
        padding: 16px;

        .order-details-item-container {
            display: flex;
            flex-direction: column;
            gap: 8px;

            .order-details-item {
                display: flex;
                justify-content: space-between;         
            }

            .order-image-container {
                display: flex;
                gap: 8px;

                .img-product {
                    width: 50px;
                    height: 50px;
                    border-radius: 4px;
                    object-fit: cover;
                    object-position: center;
                }

                .product-detail {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                
                    .product-price {
                        display: flex;
                        gap: 8px;
                    }
                }
            }
        }

        .order-total {
            display: flex;
            justify-content: space-between;
        }
    }
`;

export { Container };
