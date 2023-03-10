import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  YouTube,
  ChevronRightOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
const FooterContainer = styled.div`
  color: #b9b2b2;
  /* background-color: #6b6464; */
  background-image: url("https://files.fm/thumb_show.php?i=a4w6fgkat");
  background-size: cover;
`;
const Container = styled.div`
  display: flex;
  margin: 0px 80px;
`;
const Logo = styled.div`
  width: 200px;
  height: 70px;
`;
const Image = styled.img`
  width: 100%;
`;
const NameShop = styled.h3`
  margin-top: 15px;
  color: #b9b2b2;
`;
const Desc = styled.p`
  margin-top: 10px;
  color: #b9b2b2;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 20px;
`;
const Center1 = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  margin-top: 20px;
  color: #ecdddd;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* background-color: green; */
`;
const ListItem = styled.li`
  margin-top: 2px;
  /* width: 50%; */
  /* background-color: red; */
  width: 170px;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Contact = styled.div`
  margin-top: 8px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CenterListItem = styled.div`
  display: flex;
`;
const Footer = () => {
  return (
    <FooterContainer className="fottercontainer">
      <Container className="container">
        <Left className="left">
          <Logo>
            <Image src="https://bizweb.dktcdn.net/100/335/381/themes/762562/assets/logo.png?1655104839710" />
          </Logo>
          <NameShop>ECOMMERCE PERFUME</NameShop>
          <Desc>GPKD s???: A123456789</Desc>
          <Desc>Ng??y c???p: 20/6/2022</Desc>
          <Desc>C???p b???i: UBND TPHCM</Desc>
          <Contact>
            <ContactItem>
              <Room
                style={{
                  padding: "1px",
                  marginRight: "10px",
                  fontSize: 16,
                  backgroundColor: "white",
                  borderRadius: 50,
                  color: "black",
                }}
              />
              90 Linh Trung, Th??? ?????c
            </ContactItem>
            <ContactItem>
              <Phone
                style={{
                  padding: "1px",
                  marginRight: "10px",
                  fontSize: 16,
                  backgroundColor: "white",
                  borderRadius: 50,
                  color: "black",
                }}
              />
              0919999999
            </ContactItem>
            <ContactItem>
              <MailOutline
                style={{
                  padding: "1px",
                  marginRight: "10px",
                  fontSize: 16,
                  backgroundColor: "white",
                  borderRadius: 50,
                  color: "black",
                }}
              />
              contact@gmail.com
            </ContactItem>
          </Contact>
        </Left>
        <Center className="center">
          <Title>H??? TR??? KH??CH H??NG</Title>
          <List className="list">
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">Ch??nh s??ch b???o m???t</ListItem>
            </CenterListItem>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">Ch??nh s??ch v???n chuy???n</ListItem>
            </CenterListItem>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">Ch??nh s??ch ?????i tr???</ListItem>
            </CenterListItem>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">H??nh th???c thanh to??n</ListItem>
            </CenterListItem>
          </List>
        </Center>
        <Center1 className="center1">
          <Title>H?????NG D???N</Title>
          <List>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">H?????ng d???n mua h??ng</ListItem>
            </CenterListItem>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">H?????ng d???n thanh to??n</ListItem>
            </CenterListItem>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">H?????ng d???n giao nh???n</ListItem>
            </CenterListItem>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">??i???u kho???n d???ch v???</ListItem>
            </CenterListItem>
          </List>
        </Center1>
        <Right className="right">
          <Title className="title">K???T N???I M???NG X?? H???I</Title>
          <SocialContainer className="socialContainer">
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="FF0000">
              <YouTube />
            </SocialIcon>
          </SocialContainer>
        </Right>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
