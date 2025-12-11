import { options } from "./lib";

export const Navbar = () => {
  return (
    <div
      className="flex w-full h-20 px-5  justify-between items-center"
      style={{ backgroundImage: "url('../src/assets/backgroundNavbar.svg')" }}
    >
      <div>
        <img src="./src/assets/guijama.svg" alt="" className="w-30 " />
      </div>

      <div className="flex gap-5">
        {options.map((el) => {
          return (
            <div key={el.url}>
              <p className="text-white text-xl">{el.name}</p>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};
