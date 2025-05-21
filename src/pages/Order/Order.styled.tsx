import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  height: fit-content;
  min-width: 360px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    min-width: 100%;
    padding: 16px;
    gap: 16px;
    min-width: -webkit-fill-available;
  }


  .order-list-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .no-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .order-list {
    .order-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .order-item-quantity {
       display: flex;
       justify-content: space-between;

        .order-item-quantity-info {
            display: flex;
            gap: 16px;
        }
    }

    .divider {
        margin-top: 4px;
    }
  }

  .order-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .delivery-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: ${({ theme }) => theme.colors.backgroundGray};
    border-radius: 4px;
    padding: 16px;
  }
`;

export { Container };
