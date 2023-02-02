import styled from "styled-components";
import { Badge } from "@material-ui/core";

import {
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  FormatListBulletedSharp,
} from "@material-ui/icons";
const Container = styled.header`
  background-color: black;
  margin-bottom:10px;
`;
const NavbarContainer = styled.div`
  height: 82px;
  // min-width: 550px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 150px;
`;
const Logo = styled.div`
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Image = styled.img`
  min-width: 80%;
  height: 57px;
  object-fit: contain;
  text-align: left;
`;
const Nav = styled.nav`
  display: flex;
  /* background-color: green; */
  flex: 3;
`;
const Item = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0px;
  margin-right: 33px;
  justify-content:center;
  // background-color: red;
  align-content: center;
  // border: 1px solid green;
  `;
const Name = styled.li`
  color: white;
  padding: 12px 12px;
  border-radius: 10px;
  font-size: 13px;
  // background-color: rgb(255, 255, 255,0.5); 
  width:max-content;
  align-self: center;
`;
const NavbarRight = styled.div`
  flex: 1;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: right;
  // padding-right :50px;
`;
const NavbarLeft = styled.div`
  display: flex;
  flex:4; 
  // background-color: pink;
  height:57px;

`

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
const ButtonNav = styled.a`
 padding-right: 15px;

`
const Navtab = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999999;
  display: none;
  
`
const Tab = styled.ul`
  width: 300px;
  height: 100%;
  position: fixed;
  z-index: 999999;
  left:0px;
  top: 0px;
  background-color: dimgray;
  -webkit-box-shadow: 0px 2px 11px 1px rgb(168 168 168 / 54%);
  -moz-box-shadow: 0px 2px 11px 1px rgba(168,168,168,0.54);
  box-shadow: 0px 2px 11px 1px rgb(168 168 168 / 54%);
  list-style-type: none;
  padding: 0px;
`
const IteamTab = styled.li`
  // background-color: #fff;
  border-bottom:1px solid #fff;
  line-height:3.0;
  padding-left: 50px;
  color: #fff;
  font-size: 13px;
`
const Input = styled.span`
`

const opentab = () => {
}
const Navbar = () => {

  return (
    <Container className="navcontainer">

      <NavbarContainer className="navbarcontainer">
        <Navtab>
          <Tab>
            <span className="logotab"></span>
            <IteamTab>Trang chủ</IteamTab>
            <IteamTab>Giới thiệu</IteamTab>
            <IteamTab>Sản phẩm</IteamTab>
            <IteamTab>Review</IteamTab>
            <IteamTab>Liên hệ</IteamTab>

          </Tab>
        </Navtab>
        <NavbarLeft className="navleft">
          <Logo className="logo">
            <ButtonNav onClick={opentab()} className="navbutton">
              <FormatListBulletedSharp style={{ backgroundColor: "white", color: "black", fontSize: "30px", borderRadius: "5px" }} />
            </ButtonNav>
            <Image src="https://bizweb.dktcdn.net/100/335/381/themes/762562/assets/logo.png?1655104839710" />
          </Logo >

          <Nav className="nav">
            <Item>
              <Name style={{ backgroundColor: "white", color: "black" }}>
                <span>TRANG CHỦ</span>
              </Name>
            </Item>
            <Item>
              <Name>
                <span>GIỚI THIỆU</span>
              </Name>
            </Item>
            <Item>
              <Name>
                <span>SẢN PHẨM</span>
              </Name>
            </Item>
            <Item>
              <Name>
                <span>REVIEW</span>
              </Name>
            </Item>
            <Item>
              <Name>
                <span>LIÊN HỆ</span>
              </Name>
            </Item>
          </Nav>
        </NavbarLeft >
        <NavbarRight className="navright">
          <MenuItem className="search">
            <Input className="textsearch">Tìm kiếm sản phẩm ...</Input>
            <SearchOutlined style={{ fontSize: 21 }} />
          </MenuItem>
          <MenuItem>
            <FavoriteBorderOutlined style={{ fontSize: 21 }} />
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="white">
              <ShoppingCartOutlined style={{ fontSize: 21 }} />
            </Badge>
          </MenuItem>
        </NavbarRight>
      </NavbarContainer >
    </Container >
  );
};

export default Navbar;
