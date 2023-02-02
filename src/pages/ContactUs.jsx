import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Slider from "../components/Slider";

import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  YouTube,
} from "@material-ui/icons";
const Container = styled.div`
  font-family: "Muli",serif;
  -webkit-font-smoothing: antialiased;`;
const Wrapper = styled.div`
  margin: 30px 113px;
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Text = styled.p`
  text-align: justify;
  margin-bottom:15px;
  line-height:1.7;
  `;
const Right = styled.div`
flex:2;
 width: 70%;
`;
const Left = styled.div`
  flex:1;
  margin-right: 50px;
  width:30%;
`;
const Image = styled.img` 
  width:100%;
  object-fit: cover;
`;
const Contact = styled.div`
  margin-top: 8px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const Span = styled.span`

`
const SocialContainer = styled.div`
display: flex;
margin-top: 30px;
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

const ContacUs = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <Slider />
      <Title style={{ marginLeft: "113px" }}>Giới thiệu</Title>

      <Text style={{ color: "#00000080", marginBottom: "70px", marginLeft: "113px" }}>Trang chủ / Giới thiệu</Text>


      <Wrapper>

        <Left>
          <Text> <Span style={{ fontWeight: "bold", fontSize: "20px" }}>BLANC</Span> được thành lập vào năm 2017, hiện đang là nhà phân phối chính hãng của các nhãn hàng lớn như Versace, Creed, Salvatore Ferragamo, Carolina Herrera, Jean Paul Gaultier v..v Tại BLANC, tất cả sản phẩm đều là hàng chính hãng và khách hàng sẽ được hậu mãi ở mức cao nhất.
          </Text>
          <Text style={{ fontSize: "17px" }}> Cửa hàng chính </Text>
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
        </Left>
        <Right>

          <Image src="https://ladigi.vn/wp-content/uploads/2020/05/thong_tin_dia_chi_google_maps.jpg" />

        </Right>
      </Wrapper>
      <Footer />
    </Container >
  );
};

export default ContacUs;
