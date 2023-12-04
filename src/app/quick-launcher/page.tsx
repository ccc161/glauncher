'use client'
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Flex, Radio } from 'antd';

const baseStyle: React.CSSProperties = {
  width: "100%",
//   height: "100%",
  height: 100
};

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('horizontal');
  const vertical = true;
  return (
    <Flex gap="middle" vertical>

      <Flex vertical={vertical}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }} />
        ))}
      </Flex>
    </Flex>
  );
};

export default App;