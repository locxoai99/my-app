import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 8px;
  height: 20vh;
  position: relative;
  min-width: 355px;
  height: 105px;
  display: flex;
  justify-content: center;
  

`;
const Image = styled.img`
  width: fit-content;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
    </Container>
  );
};

export default CategoryItem;
