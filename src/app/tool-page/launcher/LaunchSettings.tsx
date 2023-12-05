'use client'
import { Col, Row, Flex, Layout, Divider, Input, Select, Space, Button, InputNumber, Radio } from "antd";
import React, { useState, useRef } from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { ValueType } from '@rc-component/mini-decimal';
import type { RadioChangeEvent } from 'antd';
import { Card } from 'antd';
import alertGlobalNotification from '../../util/notification/GlobalNotification';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

import { UserConfig } from "@/app/data/userConfig";

const SizeConstant = {
  "720": [1280, 720],
  "1080": [1920, 1080],
  "1440": [2560, 1440],
  "2160": [3840, 2160]
}

const LaunchSettingsCard = () => {

  const [width, setWidth] = useState<number>(UserConfig.width);
  const [height, setHeight] = useState<number>(UserConfig.height);
  const [fullscreen, setFullscreen] = useState<boolean>(UserConfig.fullWindow);
  const [popUpWindow, setPopUpWindow] = useState<boolean>(UserConfig.popUpWindow);
  const [sizeInputDisable, setSizeInputDisable] = useState<boolean>((height?.toString() in SizeConstant) ? true : false);



  const handleWidthChange = (value: number | null) => {
    if (value !== null) {
      setWidth(value);
    }
  };

  const handleHeightChange = (value: number | null) => {
    if (value !== null) {
      setHeight(value);
    }
  };

  const handleFullscreenChange = (e: RadioChangeEvent) => {
    setFullscreen(e.target.value === 'true');
  };

  const handlePopUpWindowChange = (e: RadioChangeEvent) => {
    setPopUpWindow(e.target.value === 'true');
  };

  const handleSizeChange = (value: ValueType | null) => {
    if (value !== 'customed' && value !== null) {
      let heightInt = parseInt(value.toString())
      setHeight(heightInt)
      setWidth(heightInt * 16 / 9)
      setSizeInputDisable(true)
      return
    }
    setSizeInputDisable(false)
  };

  const handleSave = () => {
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
      <Card title="启动参数" bordered={true}
        style={{ backgroundColor: "#F0F0F0", alignItems: "center" }}
        headStyle={{textAlign: "center"}}
      >
        <Space direction="vertical" size="middle" style={{ display: 'flex' }} >
          <Row align={'middle'} gutter={[0, 0]} justify={'center'}>
            <Space size={"small"} split={<Divider type="vertical" />} align="center">
              <Col ><a>全屏</a></Col>
              <Col >
                <Radio.Group onChange={handleFullscreenChange} value={fullscreen.toString()} optionType="button">
                  <Radio value="true">是</Radio>
                  <Radio value="false">否</Radio>
                </Radio.Group>
              </Col>
            </Space>

          </Row>
          <Row align={'middle'} gutter={[0, 0]} justify={'center'}>
            <Space size={"small"} split={<Divider type="vertical" />} align="center">
              <Col ><a>全屏</a></Col>
              <Col>
                <Radio.Group onChange={handlePopUpWindowChange} value={popUpWindow.toString()} optionType="button">
                  <Radio value="true">是</Radio>
                  <Radio value="false">否</Radio>
                </Radio.Group>
              </Col>
            </Space>
          </Row>
          <Row align={'middle'} gutter={[16, 16]} justify={"center"} >
            <Col>
              <Select
                defaultValue="720"
                style={{ width: 120 }}
                onChange={handleSizeChange}
                options={[
                  { value: '720', label: '1280*720' },
                  { value: '1080', label: '1920*1080' },
                  { value: '1440', label: '2560*1440' },
                  { value: '2160', label: '3840*2160' },
                  { value: 'customed', label: '自定义' }
                ]}
              />
            </Col>
          </Row>
          <Row align={'middle'} gutter={[10, 0]} justify={"center"}>
            <Col >
              <InputNumber
                prefix="宽" controls={false} min={10} onChange={handleWidthChange}
                style={{ width: 70 }} placeholder={sizeInputDisable ? width?.toString() : ''} disabled={sizeInputDisable}
              />
            </Col>
            <Col >
              <InputNumber prefix="高" controls={false} min={10} onChange={handleHeightChange}
                style={{ width: 70 }} placeholder={sizeInputDisable ? height?.toString() : ''} disabled={sizeInputDisable}
              />
            </Col>
          </Row>

          <Row align={'middle'} gutter={[16, 16]} justify={"center"} >
            <Col>
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