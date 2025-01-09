import React from "react";
import { Typography, Button, Image } from "antd";
import "./HeroSection.css";
import heroImage from "./Images/Traveller.png";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <section className="ant-hero">
      <div className="ant-hero-content">
        <Title level={1}>
          Travel, enjoy and live a new and full life
        </Title>
        <Paragraph>
          Built Wicket longer admire do barton vanity itself do in it. <br /> Preferred to sportsmen it engrossed listening. Park gate <br /> sell they west hard for the.
        </Paragraph>
        <div className="ant-hero-buttons">
          <Button type="danger" size="large" className="ant-find-out-btn">Find out more</Button>
          <Button type="danger" size="large" className="ant-play-demo-btn">Play Demo</Button>
        </div>
      </div>
      <div className="ant-hero-image">
        <Image src={heroImage} alt="Travel" preview={false} />
      </div>
    </section>
  );
};

export default HeroSection;