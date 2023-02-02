import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Container = styled.div``;
const ContainerRegister = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://bizweb.dktcdn.net/thumb/1024x1024/100/335/381/articles/288352931-1399979727095556-6312185995248072828-n.jpg?v=1655612379497")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Register = () => {
  return (
    <Container>
      <Navbar />
      <ContainerRegister>
        <Wrapper>
          <Title>ĐĂNG KÝ TÀI KHOẢN</Title>
          <Form>
            <Input placeholder="Họ" />
            <Input placeholder="Tên" />
            <Input placeholder="Email" />
            <Input placeholder="Số điện thoại" />
            <Input placeholder="Mật khẩu" />
            <Input placeholder="Xác nhận mật khẩu" />
            <Agreement>
              Vui lòng xác thực email ngay sau khi bạn đăng kí tạo tài khoản.
              Nếu bạn đã có tài khoản, vui lòng đăng nhập tại <a href="">đây</a>
            </Agreement>
            <Button>Đăng ký</Button>
          </Form>
        </Wrapper>
      </ContainerRegister>
      {/* <Newsletter /> */}
      <Footer />
    </Container>
  );
};

export default Register;
