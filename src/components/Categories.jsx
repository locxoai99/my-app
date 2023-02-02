import styled from "styled-components";
import { categories } from "../data.js";
import CategoryItem from "./CategoryItem.jsx";
const Container = styled.div`
  margin: 0px 70px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
