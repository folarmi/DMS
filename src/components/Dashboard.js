import orderOne from "../assets/orderOne.svg";
import orderTwo from "../assets/orderTwo.svg";
import pool from "../assets/pool.svg";
import order from "../assets/order.svg";
import orderThree from "../assets/orderThree.svg";
import orderFour from "../assets/orderFour.svg";
import comparison from "../assets/comparison.svg";
import deliveredOrders from "../assets/deliveredOrders.svg";
import Navbar from "../data/templates/Navbar";
import lens from "../assets/lens.svg";
import avatar from "../assets/avatar.svg";

const Dashboard = () => {
  return (
    <div className="px-4 flex">
      <div className="h-full">
        {/* w-64 */}
        <Navbar />
      </div>
      <div className="shadow-md">
        <section className="flex justify-between items-center mr-6 pb-2">
          <div className="flex items-center">
            <img src={lens} alt="lens" className="ml-4" />
            <p className="text-xs text-lightAsh ml-4">Search</p>
          </div>
          <div className="flex items-center">
            <img src={avatar} alt="avatar" className="mr-2" />
            <div className="">
              <p className="text-sm font-bold">Jude Adam</p>
              <p className="text-xs ">Admin</p>
            </div>
          </div>
        </section>

        <div className="bg-offBlue p-10">
          <p className="text-2xl font-bold text-darkBlue pb-6">Dashboard</p>
          <section className="flex justify-between w-full bg-offBlue">
            <div className="mr-10">
              <img src={orderOne} alt="orderOne" className="shadow-md mb-8" />
              <img src={orderTwo} alt="orderTwo" className="shadow-md mb-8" />
            </div>
            <div className="mr-10">
              <img src={comparison} alt="pool" className=" shadow-md" />
            </div>
            <div className="">
              <img src={order} alt="order" className=" shadow-md" />
            </div>
          </section>
          <section className="flex justify-between">
            <div className="">
              <img
                src={orderThree}
                alt="orderThree"
                className="w-64 shadow-md mb-8"
              />
              <img
                src={orderFour}
                alt="orderFour"
                className="w-64 shadow-md mb-8"
              />
            </div>
            <img src={pool} alt="comparison" className="w-64 shadow-md mb-8" />
            <img
              src={deliveredOrders}
              alt="deliveredOrders"
              className="w-2/6 shadow-md mb-8"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
