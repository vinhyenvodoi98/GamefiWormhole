import { Row, Col, Input, Button } from 'antd';

const Home = () => {
    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Col xs={20} sm={16} md={12} lg={8} xl={6}>
                <div style={{ textAlign: 'center' }}>
                <h1>Linaio Gate</h1>
                <p>Crosschain collateral</p>
                </div>
                <Input placeholder="0xaaaa" style={{ marginBottom: 16 }} />
                <Button type="primary" block>
                    Submit
                </Button>
            </Col>
        </Row>
    );
}

export default Home;
