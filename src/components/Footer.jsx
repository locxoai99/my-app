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
          <Desc>GPKD số: A123456789</Desc>
          <Desc>Ngày cấp: 20/6/2022</Desc>
          <Desc>Cấp bởi: UBND TPHCM</Desc>
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
              90 Linh Trung, Thủ Đức
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
          <Title>HỖ TRỢ KHÁCH HÀNG</Title>
          <List className="list">
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">Chính sách bảo mật</ListItem>
            </CenterListItem>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">Chính sách vận chuyển</ListItem>
            </CenterListItem>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">Chính sách đổi trả</ListItem>
            </CenterListItem>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">Hình thức thanh toán</ListItem>
            </CenterListItem>
          </List>
        </Center>
        <Center1 className="center1">
          <Title>HƯỚNG DẪN</Title>
          <List>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">Hướng dẫn mua hàng</ListItem>
            </CenterListItem>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">Hướng dẫn thanh toán</ListItem>
            </CenterListItem>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">Hướng dẫn giao nhận</ListItem>
            </CenterListItem>
            <CenterListItem>
              {" "}
              <ChevronRightOutlined />
              <ListItem className="list-item">Điều khoản dịch vụ</ListItem>
            </CenterListItem>
          </List>
        </Center1>
        <Right className="right">
          <Title className="title">KẾT NỐI MẠNG XÃ HỘI</Title>
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
