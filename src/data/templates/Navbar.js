import { NavbarItems } from "../NavbarData";

const Navbar = () => {
  return (
    <div className="mt-28 h-screen">
      {NavbarItems.map(({ id, title, icon }) => {
        return (
          <div className=" w-48 pb-14" key={id}>
            <div className="flex justify-around">
              <img src={icon} alt="icon" className="w-4" />
              <p className="text-dark text-sm">{title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
