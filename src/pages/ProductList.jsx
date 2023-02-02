import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-weight: 500;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title className="color">Nước Hoa Designer Nam</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Lọc:</FilterText>

          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>10ML</Option>
            <Option>100ML</Option>
            <Option>250ML</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sắp xếp:</FilterText>
          <Select>
            <Option selected>Thứ tự</Option>
            <Option>A {"→"} Z</Option>
            <Option>Z {"→"} A</Option>
            <Option>Giá tăng dần</Option>
            <Option>Giá giảm dần</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
