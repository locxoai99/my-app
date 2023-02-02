import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Slider from "../components/Slider";

import { Add, Remove, ClearOutlined } from "@material-ui/icons";
import { colors } from "@material-ui/core";
const Container = styled.div``;
const Wrapper = styled.div`
  margin: 0px 113px;
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Text = styled.p`
  text-align: justify;
  margin-bottom:15px;
  font-family: "Muli",serif;
  line-height:1.7;
  -webkit-font-smoothing: antialiased;
  `


const Intro = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <Slider />
      <Wrapper>
        <Title>Giới thiệu</Title>
        <Text>

          <Text style={{ color: "#00000080", marginBottom: "70px" }}>Trang chủ / Giới thiệu</Text>

          <Text>Cửa hàng nước hoa BLANC (tiền thân là Chietnuochoa.com) thành lập vào 2017.</Text>

          <Text>Hiện tại có mặt ở tỉnh Trà Vinh</Text>

          <Text>Shop bán các sản phẩm về nước hoa, hỗ trợ ship trên toàn quốc đối với tất cả các khách hàng từ Bắc vào Nam!</Text>

          <Text>Nước hoa chiết có lẽ là một khái niệm vẫn còn mới lạ đối với nhiều người, nhưng đừng lo vì đã có BLANC ở đây rồi!!</Text>
          <Text>Hãy cùng BLANC đọc và hiểu rõ hơn tất tần tật về "nước hoa chiết" trong bài viết dưới đây nhé</Text>

          <Text>Bật mí một chút nè: tại BLANC GIÁ chỉ từ 99K /1 chai 10ml thôi nhé! (2-4 tháng sử dụng)</Text>

          <Text>1- "Nước hoa Chiết” là gì ?</Text>
          <Text>"Nước hoa chiết" là nước hoa được CHIẾT TRỰC TIẾP từ chai NGUYÊN GỐC sang chai có DUNG TÍCH NHỎ HƠN.</Text>

          <Text>2- "Nước hoa chiết” bắt nguồn từ đâu ?</Text>
          <Text>Phong trào “nước hoa chiết” được hình thành bởi người dùng nước hoa cao cấp, có nhu cầu chia sẻ và thử nhiều mùi nên thường mua chai full size (100/200ml) về để chia bớt cho các bạn khác, qua đó tiết kiệm chi phí.</Text>

          <Text>3- Hãng có sản xuất “nước hoa chiết” không ?</Text>
          <Text>KHÔNG NHÉ! Hãng chỉ có CHAI GỐC với dung tích khác nhau: lớn (fullsize từ 100ml trở lên), vừa (travel size từ 30ml), nhỏ (mini size 4-5-7ml ) hoặc để test mùi (vial 1-2ml). Nhưng giá của những size nhỏ lại rất cao so với dung tích (ví dụ 100ml 1.5tr, 5ml 300K)!</Text>

          <Text>4- Nước hoa chiết có ưu điểm gì?</Text>
          <Text>Ưu điểm mạnh nhất là về GIÁ! Vì chính sách giá của hãng khi bán các size vial 1-2ml, Mini 5ml luôn luôn rất cao so với dung tích. Nghĩa là chai 5ml so với chai 100ml cách nhau 20 lần, nhưng giá chai 5ml chỉ thấp hơn khoảng 4 lần (1/4) so với chai 100ml. Nên nước hoa được chiết từ chai 100ml luôn có giá hợp lý hơn. Chai 200ml giá càng tốt hơn nữa.</Text>
          <Text>Đó là SỰ TIỆN LỢI, vì kích cỡ nhỏ nên bạn có thể đem theo mình trên 5 chai cùng một lúc.</Text>
          <Text>Đó còn là SỰ ĐA DẠNG, thay vì bỏ ra hơn 1 triệu để mua chỉ 1 loại nước hoa thì bạn có thể sở hữu hơn 5 loại nước hoa khác nhau.</Text>

          <Text>5- Phải mua ở đâu?</Text>
          <Text>Nếu muốn mua một chai nước hoa chiết thật từ nước hoa chính hãng, chỉ có thể tìm đến những nơi các bạn tin tưởng hoặc có uy tín kinh doanh nước hoa chiết thật mà thôi.</Text>

          <Text>6- Chất lượng “nước hoa chiết” ra làm sao ?</Text>
          <Text>Tương đồng với chai gốc, giống như là hai anh em sinh đôi vậy. Nếu có cũng chỉ ảnh hưởng 1-2% ko đáng kể.</Text>

          <Text>7- “Nước hoa chiết” có sợ FAKE không ? Nếu có làm thế nào phát hiện được ?</Text>
          <Text>Có nha! dấu hiệu nhận biết FAKE dễ nhất nằm ở :</Text>
          <Text>GIÁ: Hàng FAKE nhan nhản hiện nay đều CHUNG MỘT GIÁ, CHUNG MỘT KÍCH CỠ BAO BÌ và KHÔNG CÓ CHAI GỐC cho các bạn check . Không có chuyện CHANEL COCO bằng giá CK ONE được - vì CON SỐ KHÔNG BIẾT NỐI DỐI nhé ^^</Text>

        </Text>
      </Wrapper>
      <Footer />
    </Container >
  );
};

export default Intro;
