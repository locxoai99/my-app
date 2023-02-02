import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  /* border: 1px solid #dfe4e8; */
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
  color: #413c3c;
`;
const MenuTitle = styled.div`
  justify-content: flex-start;
  display: flex;
  margin-top: 5px;
`;
const TitleName = styled.h2`
  font-weight: 10;
  font-size: 15px;
  margin-right: 10px;
  color: dimgray;
`;
const DescShip = styled.p`
  color: #313030;
  margin: 20px 0px;
`;
const Price = styled.h1`
  margin-top: 30px;
  font-weight: 100;
  font-size: 35px;
  color: dimgray;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterSizeName = styled.span`
  padding: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const FilterSize = styled.div`
  margin-top: 10px;
  width: 400px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const AddContainer = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const DescDetail = styled.div`
  margin-top: 50px;
`;
const Description = styled.h3`
  margin-top: 30px;
  font-weight: 10;
  font-size: 15px;
  color: #898989;
`;
const QuickProduct = styled.div`
  max-width: 575px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image1 = styled.img`
  margin: 0px 3px;
  width: 20%;
  display: flex;
  cursor: pointer;
  border: 1px solid #dfe4e8;
  &:hover {
    border: 1px solid #575a5c;
  }
`;
const Arrow = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 50%;
  border: 1px solid gray;
  &:hover {
    background-color: #596068;
    color: white;
  }
`;
const ImageQuick = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://bizweb.dktcdn.net/thumb/large/100/335/381/products/amaf-club-de-nuit-intense-limited-edition-01.png" />
          <QuickProduct>
            <Arrow>
              <ArrowLeftOutlined />
            </Arrow>
            <ImageQuick>
              <Image1 src="https://bizweb.dktcdn.net/thumb/large/100/335/381/products/amaf-club-de-nuit-intense-limited-edition-01.png" />
              <Image1 src="https://bizweb.dktcdn.net/thumb/large/100/335/381/products/download-9.jpg" />
              <Image1 src="https://bizweb.dktcdn.net/thumb/large/100/335/381/products/armaf-club-de-nuit-intense-a-collectors-pride-l.jpg" />
              <Image1 src="https://bizweb.dktcdn.net/thumb/large/100/335/381/products/club-de-nuit-intense-limited-01.png" />
            </ImageQuick>
            <Arrow>
              <ArrowRightOutlined />
            </Arrow>
          </QuickProduct>
        </ImgContainer>

        <InfoContainer>
          <Title>
            Armaf Club De Nuit Intense Limited Luxury Edition Men New
          </Title>
          <MenuTitle>
            <TitleName>Hãng: Armaf </TitleName>
            <TitleName> | </TitleName>
            <TitleName> Tình trạng: Còn hàng</TitleName>
          </MenuTitle>
          <Price>1.750.000đ</Price>
          <DescShip>
            Miễn phí vận chuyển cho hóa đơn giá trị trên 750.000VNĐ
          </DescShip>
          <FilterContainer>
            <Filter>
              <FilterTitle>Dung tích:</FilterTitle>
              <FilterSize>
                <FilterSizeName>250ML</FilterSizeName>
                <FilterSizeName>100ML</FilterSizeName>
                <FilterSizeName>MẪU DÙNG THỬ 10ML</FilterSizeName>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
          <DescDetail>
            <Title style={{ color: "black", fontSize: 18, fontWeight: "550" }}>
              Mô tả
            </Title>
            <Description>
              Nước Hoa Nam Armaf Club De Nuit Intense For Men Parfume Limited
              EDP 105ml là chai nước hoa nam cao cấp một mùi hương đến từ Armaf.
              Với phiên bản đặc biệt giới hạn Club De Nuit Intense Man Limited
              Edition EDP này cảm giác chua của mùi chanh cam khi lần đầu xịt
              không còn nữa mà thây vào đó là nhiều hương dứa hơn tạo nên mùi
              hương được mềm mại hơn. Về thiết kế hộp của bản Nước Hoa Armaf
              Club De Nuit Intense For Men Parfume Limited 105ml cũng đặc biệt
              đẹp và sang trọng hơn với thiết kế nơ viền. Bên trong là hộp cứng
              phủ nhung sang trọng và có kèm thư cảm ơn đặc biệt từ nhà sản
              xuất.
            </Description>
          </DescDetail>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
