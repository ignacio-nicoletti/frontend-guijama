import { useNavigate } from "react-router-dom";
import { options } from "./lib";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex w-full h-20 px-5 justify-between items-center"
      style={{ backgroundImage: "url('../src/assets/backgroundNavbar.svg')" }}
    >
      <div>
        <img src="/src/assets/guijama.svg" alt="Logo" className="w-30" />
      </div>

      <div className="flex gap-5">
        {options.map((el) => (
          <p
            key={el.url}
            onClick={() => navigate(el.url)}
            className="text-white text-xl cursor-pointer "
          >
            {el.name}
          </p>
        ))}
      </div>
    </div>
  );
};
