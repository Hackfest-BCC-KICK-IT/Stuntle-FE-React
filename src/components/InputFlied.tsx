interface InputFliedProps {
  placeHolder?: string;
  value?: string;
  onChangeValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const InputFlied = ({
  placeHolder,
  value,
  onChangeValue,
  name,
}: InputFliedProps) => {
  return (
    <input
      required
      type="text"
      className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
      placeholder={placeHolder}
      value={value}
      onChange={onChangeValue}
      name={name}
    />
  );
};
export default InputFlied;
