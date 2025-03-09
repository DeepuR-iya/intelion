import { motion } from "framer-motion";

const Carousel = () => {
  return (
    <div className="flex justify-center w-100vw ">
      <div className="grid grid-cols-6 grid-rows-5 gap-4 place-items-center my-12">
        <div className="col-span-2 row-span-5 rounded-xl">
          <div className="h-[60vh] w-[30vw]  bg-[url(/recog.png)] rounded-xl md:bg-cover bg-no-repeat bg-contain md:bg-center p-2 shadow-md">
            <h1 className="text-xl font-bold">Our Company is Recognized by</h1>
          </div>
        </div>
        <div className="col-span-4 row-span-2 col-start-3 row-start-4 w-full h-full bg-red-100">
          <div className="">
            <p>Google</p>
            <p>Google</p>
          </div>
        </div>
        <div className="col-span-2 row-span-3 col-start-3 row-start-1 w-full h-full bg-black rounded-lg">
          3
        </div>
        <div className="col-span-2 row-span-3 col-start-5 row-start-1 w-full h-full bg-green-100">
          4
        </div>
      </div>
    </div>
  );
};

export default Carousel;
