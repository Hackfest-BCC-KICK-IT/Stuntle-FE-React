interface BoxItemProps {
  title: string;
  data: number;
}

const BoxItem = ({ title, data }: BoxItemProps) => {
  return (
    <div className="flex flex-col p-5 my-4 w-[264px] h-[160px] items-center justify-center border-2 border-solid border-light-violet rounded-md">
      <h4 className="text-center text-7xl text-orange font-semibold mb-1">
        {data}
      </h4>
      <div className="text-base text-center px-1 font-semibold w-[232px]">
        {title}
      </div>
    </div>
  );
};
export default BoxItem;
