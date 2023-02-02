import styled from "styled-components";
import { ArrowRightOutlined } from "@material-ui/icons";
const Container = styled.div`
  margin: 40px 100px 20px 100px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h2`
  font-size: 36px;
  font-weight: 300;
`;
const Detail = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const More = styled.div`
  cursor: pointer;
`;
const ContentDetail = () => {
  return (
    <Container>
      <Title>SẢN PHẨM NỔI BẬT</Title>
      <Detail>
        <Item>
          <More>Xem thêm</More>
          <ArrowRightOutlined style={{ cursor: "pointer" }} />
        </Item>
      </Detail>
    </Container>
  );
};
export default ContentDetail;
