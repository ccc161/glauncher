'use client'
import HorizontalLayout from "./HorizontalLayout";
import React, { useState, useRef } from 'react';
import { Flex, Layout } from 'antd';
import LaunchSettingsCard from "./LaunchSettings"

const LauncherPage = () => {
  return (
    <>
      <Flex>
        <LaunchSettingsCard />
        <LaunchSettingsCard />
        <LaunchSettingsCard />
        <LaunchSettingsCard />
        <LaunchSettingsCard />
      </Flex>
    </>
  );
};

export default LauncherPage;