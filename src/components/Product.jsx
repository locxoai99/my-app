import styled from "styled-components";

import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
const ProductContainer = styled.div``;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 330px;
  height: 330px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  /* height: 100%; */
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Name = styled.h3`
  text-align: center;
  width: 320px;
  /* background-color: red; */
  font-size: 17px;
  font-weight: 10;
`;
const Price = styled.h3`
  margin-top: 10px;
  text-align: center;
  width: 320px;
  font-size: 17px;
  font-weight: 8;
  color: dimgray;
`;
const Product = ({ item }) => {
  return (
    <ProductContainer>
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
      <Name>{item.name}</Name>
      <Price>{item.price}</Price>
    </ProductContainer>
  );
};

export default Product;
