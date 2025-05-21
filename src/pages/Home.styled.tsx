import styled from "styled-components";

const Container = styled.div`
	padding: 3.75rem;
	background: ${({ theme }) => theme.colors.backgroundLight};
	display: flex;
	gap: 20px;
    .product-list {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 768px) and (max-width: 1440px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (min-width: 1441px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

const LeftSection = styled.div`
  order: 2;
  flex: 1;
  max-width: 900px;
  @media (min-width: 1025px) {
    order: 1;
  }
`;

const RightSection = styled.div`
  order: 1;
  width: 100%;

  @media (min-width: 1025px) {
    order: 2;
    max-width: 350px;
    flex-shrink: 0;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;   
  width: 100vw;     
  background: ${({ theme }) => theme.colors.backgroundLight};
`;

export { Container, LoadingWrapper, LeftSection, RightSection };
