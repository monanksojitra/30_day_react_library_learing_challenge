import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Avatar, Card, Skeleton, Switch } from "antd";
import { useState } from "react";

const { Meta } = Card;

const Day14 = () => {
  const [loading, setLoading] = useState(true);

  const onChange = (checked) => {
    setLoading(!checked);
  };

  return (
    <div className="d-flex justify-content-evenly">
      <Switch checked={!loading} onChange={onChange} />
      <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
        <Meta
          avatar={
            <Avatar src="https://mdbootstrap.com/img/new/avatars/7.jpg" />
          }
          title="Card title-1"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={
              <Avatar src="https://mdbootstrap.com/img/new/avatars/6.jpg" />
            }
            title="Card title-2"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </div>
  );
};

export default Day14;
