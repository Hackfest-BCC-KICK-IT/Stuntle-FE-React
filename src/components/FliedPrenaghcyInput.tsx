interface FliedPrenaghcyInputProps {
  heading: string;
  subtext: string;
  child: JSX.Element;
}

const FliedPrenaghcyInput = ({
  heading,
  subtext,
  child,
}: FliedPrenaghcyInputProps) => {
  return (
    <div className="flex flex-col w-full md:w-[70%] my-4">
      <h3>{heading}</h3>
      {child}
      <p className="text-grey mt-2 text-sm font-normal">{subtext}</p>
    </div>
  );
};
export default FliedPrenaghcyInput;
