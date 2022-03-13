import { Label } from "./styles";

const ToggleSwitch = ({ ...rest }) => {
  return (
    <Label>
      <input type="checkbox" {...rest}></input>
      <span></span>
    </Label>
  );
};

export default ToggleSwitch;
