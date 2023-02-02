import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  margin: 0px 85px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`;

const Header = () => {
  return (
    <Container>
      <Left>
        <MenuItem>
          <b>Hotline:</b> 0946035212
        </MenuItem>
        <MenuItem>/</MenuItem>
        <MenuItem>
          <b>Email:</b> support@gmail.com
        </MenuItem>
      </Left>
      <Right>
        <MenuItem>Đăng ký</MenuItem>
        <MenuItem>Đăng nhập</MenuItem>
      </Right>
    </Container>
  );
};

export default Header;
