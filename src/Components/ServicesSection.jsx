import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { CloudOutlined, RocketOutlined, CalendarOutlined, SettingOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const ServicesSection = () => {
    const services = [
        { icon: <CloudOutlined />, title: "Calculated Weather", description: "Built Wicket longer admire do barton vanity itself do in." },
        { icon: <RocketOutlined />, title: "Best Flights", description: "Engrossed listening. Park gate sell they west hard for the." },
        { icon: <CalendarOutlined />, title: "Local Events", description: "Barton vanity itself do in. Prefer do right to meet engrossed listening." },
        { icon: <SettingOutlined />, title: "Customization", description: "We deliver customized aviation services for military customers." },
    ];

    return (
        <div style={{ padding: "50px 20px", textAlign: "center" }}>
            <Title level={3}>We Offer Best Services</Title>
            <Row gutter={[24, 24]} style={{ marginTop: 30 }}>
                {services.map((service, index) => (
                    <Col xs={24} sm={12} lg={6} key={index}>
                        <Card
                            bordered={false}
                            style={{ textAlign: "center", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: 8 }}
                        >
                            <div style={{ fontSize: "32px", color: "#1890ff", marginBottom: 20 }}>{service.icon}</div>
                            <Title level={4}>{service.title}</Title>
                            <Text>{service.description}</Text>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ServicesSection;