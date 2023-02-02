import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Container = styled.div``;
const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
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
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Navbar />
      <ContainerLogin>
        <Wrapper>
          <Title>ĐĂNG NHẬP TÀI KHOẢN</Title>
          <Form>
            <Input placeholder="Email" />
            <Input placeholder="Mật khẩu" />
            <Button>ĐĂNG NHẬP</Button>
            <Link>
              Bạn chưa có tài khoản, vui lòng đăng ký tại <a href="">đây</a>
            </Link>
            <Link>Quên mật khẩu?</Link>
          </Form>
        </Wrapper>
      </ContainerLogin>
      {/* <Newsletter /> */}
      <Footer />
    </Container>
  );
};

export default Login;
