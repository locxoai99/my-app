import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove, ClearOutlined } from "@material-ui/icons";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  margin: 30px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Ruler = styled.hr`
  background-color: #d1c5c5;
  border: none;
  height: 1px;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.h1`
  font-size: 20px;
  font-weight: 300;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Gi??? h??ng</Title>
        <Top>
          <TopButton>TI???P T???C MUA H??NG</TopButton>
          <TopTexts>
            <TopText>V???t ph???m(2)</TopText>
            <TopText>Y??u th??ch(0)</TopText>
          </TopTexts>
          <TopButton type="filled">THANH TO??N NGAY</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://bizweb.dktcdn.net/thumb/medium/100/335/381/products/ruou-rum-17.png?v=1653458568000" />
                <Details>
                  <ProductName>
                    <b>T??n s???n ph???m:</b> Thomas Kosmala No. 4 Apres L'Amour EDP
                  </ProductName>
                  <ProductSize>
                    <b>Dung t??ch:</b> 200ML
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer >
                  <span className="productamount">
                    <Add className="add" />
                    <ProductAmount >1</ProductAmount>
                    <Remove className="remove" />
                  </span>
                  <ClearOutlined className="clear" />
                </ProductAmountContainer>
                <ProductPrice>5.200.000??</ProductPrice>
              </PriceDetail>
            </Product>
            <Ruler />
            <Product>
              <ProductDetail>
                <Image src="https://bizweb.dktcdn.net/thumb/medium/100/335/381/products/ruou-rum-15.png?v=1653457501000" />
                <Details>
                  <ProductName>
                    <b>T??n s???n ph???m:</b> Giorgio Armani Acqua Di Gio Men EDP
                  </ProductName>
                  <ProductSize>
                    <b>Dung t??ch:</b> 100ML
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer >
                  <span className="productamount">
                    <Add className="add" />
                    <ProductAmount >1</ProductAmount>
                    <Remove className="remove" />
                  </span>
                  <ClearOutlined className="clear" />
                </ProductAmountContainer>
                <ProductPrice>3.190.000??</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle style={{ textAlign: "center" }}>
              ????N H??NG
            </SummaryTitle>
            <SummaryItem>
              <SummaryItemText>T???ng gi??</SummaryItemText>
              <SummaryItemPrice>8.390.000??</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Ph?? v???n chuy???n</SummaryItemText>
              <SummaryItemPrice>0??</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Ph?? gi???m gi?? v???n chuy???n</SummaryItemText>
              <SummaryItemPrice>0??</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Th??nh ti???n</SummaryItemText>
              <SummaryItemPrice>8.390.000??</SummaryItemPrice>
            </SummaryItem>
            <Button>THANH TO??N</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
