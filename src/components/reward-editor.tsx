import { RewardEntity } from "interfaces";
import Enum from "./enum";
import { Button, Input } from "semantic-ui-react";

export default function RewardEditor({
  value,
  onChange,
}: {
  value: RewardEntity[];
  onChange: Function;
}) {
  function addReward() {
    let tmp: RewardEntity[] = [...value];
    tmp.push({
      reward_type: null,
      reward_quantity: null,
    });
    onChange(tmp);
  }
  function removeReward(index: number) {
    let tmp: RewardEntity[] = [...value];
    tmp.splice(index, 1);
    onChange(tmp);
  }
  function handleChange(index: number, name: string, val: any) {
    let tmp: RewardEntity[] = [...value];
    //@ts-ignore
    tmp[index][name] = val;
    onChange(tmp);
  }
  return (
    <div>
      {value.map((reward: RewardEntity, index: number) => {
        return (
          <div
            key={index}
            className="flex gap-2 justify-between hover:border-gray-200 border-white p-1"
          >
            <div className="w-full flex gap-2 items-center">
              <span className="font-semibold mr-2 w-6">{index + 1}</span>
              <div className="w-44">
                <Enum
                  placeholder="Reward"
                  enumName="reward-type"
                  value={reward.reward_type}
                  onChange={(val) => {
                    handleChange(index, "reward_type", val);
                  }}
                />
              </div>
              <div className="w-20">
                <Input
                  type="text"
                  fluid
                  value={reward.reward_quantity || ""}
                  onChange={(evt: any) => {
                    handleChange(index, "reward_quantity", evt.target.value);
                  }}
                />
              </div>
              <Button
                icon="times"
                color="red"
                onClick={() => removeReward(index)}
              />
            </div>
          </div>
        );
      })}
      <Button icon="plus" content="Add" onClick={() => addReward()} />
    </div>
  );
}
