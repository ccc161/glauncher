'use client'
import { Col, Row, Flex, Layout, Divider, Input, Select, Space, Button, InputNumber, Radio } from "antd";
import React, { useState, useRef } from 'react';
import { ValueType } from '@rc-component/mini-decimal';
import type { RadioChangeEvent } from 'antd';
import { Card } from 'antd';
import alertGlobalNotification from '../../util/notification/GlobalNotification';
import userConfig from "@/app/util/userConfig";

const LaunchSettingsCard = () => {

  const [width, setWidth] = useState<ValueType | null>(null);
  const [height, setHeight] = useState<ValueType | null>(null);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [popUpWindow, setPopUpWindow] = useState<boolean>(false);

  const handleWidthChange = (value: ValueType | null) => {
    if (value !== undefined) {
      setWidth(value);
    }
  };

  const handleHeightChange = (value: ValueType | null) => {
    if (value !== undefined) {
      setHeight(value);
    }
  };

  const handleFullscreenChange = (e: RadioChangeEvent) => {
    setFullscreen(e.target.value === 'true');
  };

  const handlePopUpWindowChange = (e: RadioChangeEvent) => {
    setPopUpWindow(e.target.value === 'true');
  };

  const handleSave = () => {
    console.log('Width:', width);
    console.log('Height:', height);
    console.log(fullscreen);
    console.log(popUpWindow)
    if ((typeof width !== 'number')
      || (typeof height !== 'number')
      || (typeof fullscreen !== 'boolean')
      || (typeof popUpWindow !== 'boolean')
    ) {
      alertGlobalNotification('error', "保存失败", "窗口参数异常")
      return
    }
    alertGlobalNotification('success', "保存成功", "")
  };

  return (
    <>
      <Card title="启动参数" bordered={true} style={{ width: 200, backgroundColor: "#F2F2F2" }}>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Row align={'middle'} gutter={[0, 0]} justify={'space-around'}>
            <Col flex="60px" ><a>全屏</a></Col>
            <Col flex="auto">
              <Radio.Group onChange={handleFullscreenChange} value={fullscreen.toString()} optionType="button">
                <Radio value="true">是</Radio>
                <Radio value="false">否</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row align={'middle'} gutter={[0, 0]} justify={'space-around'}>
            <Col flex="60px"><a>无边框</a></Col>
            <Col flex="auto">
              <Radio.Group onChange={handlePopUpWindowChange} value={popUpWindow.toString()} optionType="button">
                <Radio value="true">是</Radio>
                <Radio value="false">否</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row align={'middle'} gutter={[16, 16]}>
            <Col flex={1}>
              <label>宽度: </label>
              <InputNumber onChange={handleWidthChange} />
            </Col>
            <Col flex={1}>
              <label>高度: </label>
              <InputNumber onChange={handleHeightChange} />
            </Col>
          </Row>
          <Row align={'middle'} gutter={[16, 16]}>
            <Col flex={1}>
              <Button type="primary" onClick={handleSave}>
                保存
              </Button>
            </Col>
          </Row>
        </Space>
      </Card>
    </>

  );
};
export default LaunchSettingsCard