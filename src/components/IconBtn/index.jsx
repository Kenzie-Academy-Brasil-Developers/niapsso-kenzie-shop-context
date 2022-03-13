import { Wrapper } from "./styles";
import { MdAdd, MdRemove } from "react-icons/md";

const IconBtn = ({ mode, ...rest }) => (
  <Wrapper mode={mode} type="button" {...rest}>
    {mode === "add" ? <MdAdd /> : <MdRemove />}
  </Wrapper>
);

export default IconBtn;
