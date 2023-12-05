import { space } from "postcss/lib/list";
import HorizontalLayout from "./HorizontalLayout";
import { Col, Row, Flex, Layout, Button } from "antd";

const LauncherPage = () => {
  return (
    <>
      <Row 
      align={"middle"} 
      style={{backgroundColor: "red", marginLeft: "1%", marginRight: "1%"}}
      justify={"start"}
      >
        <Col flex={1}>
          <Button type="primary">Launch!</Button>
        </Col>
        <Col flex={2}>
          <Button type="primary">Launch!</Button>
        </Col>
        <Col flex={1}>
          <Button type="primary">Launch!</Button>
        </Col>
        <Col flex={3}>
          <HorizontalLayout/>
        </Col>
      </Row>
    </>
  );
};

export default LauncherPage;