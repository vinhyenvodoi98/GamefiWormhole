import { Row, Col, Input, Button } from 'antd';

const Home = () => {
    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Col xs={20} sm={16} md={12} lg={8} xl={6}>
                <div style={{ textAlign: 'center' }}>
                <h1>Trang Input</h1>
                <p>Nhập thông tin của bạn:</p>
                </div>
                <Input placeholder="Họ và tên" style={{ marginBottom: 16 }} />
                <Input placeholder="Địa chỉ email" style={{ marginBottom: 16 }} />
                <Input.Password placeholder="Mật khẩu" style={{ marginBottom: 16 }} />
                <Button type="primary" block>
                Đăng ký
                </Button>
            </Col>
        </Row>
      );
}

export default Home;
