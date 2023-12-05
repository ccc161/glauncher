// HorizontalLayout.tsx
import { Button, Card, Divider } from 'antd';

const HorizontalLayout = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "3vw"}}>
      {/* Left side with a button */}
      <Button type="primary">Launch!</Button>

      {/* Split between the left and right */}
      <Divider type="vertical" style={{ height: '100%', margin: '0 16px' }} />

      {/* Right side with a horizontal rolled list of cards */}
      <div style={{ display: 'flex', overflowX: 'auto', maxWidth: "70vw" }}>
        {/* Replace this with your actual data */}
        {[1, 2, 3,4,5,6].map((item) => (
          <Card key={item} style={{ width: 200, margin: '0 8px' }}>
            <p>Card {item}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HorizontalLayout;
