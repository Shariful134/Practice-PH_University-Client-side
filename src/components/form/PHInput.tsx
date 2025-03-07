import { Input } from "antd";
import { Controller } from "react-hook-form";
type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, label, name }: TInputProps) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
