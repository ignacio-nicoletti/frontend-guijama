import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { options } from "./lib";

export const SubNavbarItem = () => {
  return (
    <div className="flex w-full gap-20 px-20 justify-evenly">
      {options.map((el, index) => (
        <Button className="text-2xl font-normal flex-1  cursor-pointer" key={index}>
          <Link to={el.url} className="w-full">
            {el.name}{" "}
          </Link>
        </Button>
      ))}
    </div>
  );
};
