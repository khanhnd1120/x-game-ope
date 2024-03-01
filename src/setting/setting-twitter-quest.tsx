import { DatePicker, Loading } from "components";
import RewardEditor from "components/reward-editor";
import { ConfigDataType, RewardType } from "interfaces";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  TextArea,
} from "semantic-ui-react";
import { api, ui } from "services";
import dataServices from "services/data";

export default function SettingTwitterQuest() {
  const { name } = useParams();
  const [config, setConfig] = useState<any>(null);
  useEffect(() => {
    async function loadConfig() {
      let rs = await api.post("/operation/api/get-config", {
        where: { name: "SETTING_TWITTER_QUEST" },
      });
      let tmp = _.cloneDeep(rs.data[0]);
      tmp.value = JSON.parse(tmp.value);
      setConfig(tmp);
    }
    loadConfig();
  }, [name]);
  async function update() {
    let tmp = _.cloneDeep(config);
    tmp.value = JSON.stringify(tmp.value);
    let rs = await api.post("/operation/api/update-config", tmp);
    let tmp1 = _.cloneDeep(rs);
    tmp1.value = JSON.parse(tmp1.value);
    setConfig(tmp1);
    ui.alert("Update success");
  }
  function handleChange(key: string, name: string, value: any) {
    let tmp = _.cloneDeep(config);
    if (!tmp.value) {
      tmp.value = {};
    }
    if (!tmp.value[key]) {
      tmp.value[key] = {};
    }
    tmp.value[key][name] = value;
    setConfig(tmp);
  }
  function renderContent() {
    if (!config) {
      return <Loading />;
    }
    return dataServices.getEnum("twitter-quest-type").items.map((item) => {
      return (
        <div key={item.value} className="mt-5">
          <p>
            Quest Type <b>{item.label}:</b>
          </p>
          <div className="flex">
            <div className="w-1/2">
              <label className="font-bold">Rate {`(%)`}</label>
              <Input
                type="text"
                fluid
                value={config?.value?.[item.value]?.rate || ""}
                onChange={(evt: any) => {
                  handleChange(item.value, "rate", evt.target.value);
                }}
              />
            </div>
            <div className="w-1/2">
              <label className="font-bold">Reward</label>
              <RewardEditor
                value={config?.value?.[item.value]?.rewards ?? []}
                onChange={(val: any) => {
                  handleChange(item.value, "rewards", val);
                }}
              />
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <div className="flex justify-between">
              <p>Edit Config</p>
              <Button
                icon="save"
                content="Save"
                primary
                onClick={() => {
                  update();
                }}
                labelPosition="left"
              />
            </div>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <p className="text-3xl font-semibold">{config?.name}</p>
          <p>Description</p>
          <Input
            type="text"
            fluid
            value={config?.description || ""}
            onChange={(evt: any) => {
              let tmp = _.cloneDeep(config);
              tmp.description = evt.target.value;
              setConfig(tmp);
            }}
          />
          <Form className="mt-4">
            <Form.Field>
              <label>Value</label>
              {renderContent()}
            </Form.Field>
          </Form>
          <div className="mt-4"></div>
        </Card.Content>
      </Card>
    </div>
  );
}
