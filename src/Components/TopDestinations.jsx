import React from "react";
import { Row, Col, Card, Typography, Image } from "antd";
import Italy from "./Images/Italy.png"
import London from "./Images/London.jpg"
import Europe from "./Images/Europe.png"

const { Title, Text } = Typography;

const destinations = [
  { image: {Italy}, title: "Rome, Italy", price: "$5.42k", days: "10 Days Trip" },
  { image: {London}, title: "London, UK", price: "$4.2k", days: "12 Days Trip" },
  { image: {Europe}, title: "Full Europe", price: "$15k", days: "28 Days Trip" },
];

const TopDestinations = () => {
  return (
    <div style={{ padding: "50px 20px", textAlign: "center",}}>
      <Title level={3}>Top Selling</Title>
      <Title level={4} style={{ color: "#8c8c8c" }}>Top Destinations</Title>
      <Row gutter={[24, 24]} style={{ marginTop: 30 }}>
        {destinations.map((destination, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              hoverable
              cover={<Image alt={destination.title} src={destination.image} preview={false} />}
              style={{ borderRadius: 8, overflow: "hidden" }}
            >
              <Title level={4}>{destination.title}</Title>
              <Text strong>{destination.price}</Text> <br />
              <Text type="secondary">{destination.days}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TopDestinations;