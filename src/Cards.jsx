import { motion } from "framer-motion";
import { useState } from "react";

const Card = ({ img, hoverImg, title, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{
        scale: 1.08,
        backgroundColor: "black",
        color: "white",
        borderColor: "white",
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-90 p-8 md:mx-4 md:my-20 m-4 rounded-lg shadow-lg cursor-pointer bg-white"
    >
      <img src={hover ? hoverImg || img : img} className="h-20 w-20" />
      <h1 className="text-xl font-bold">{title}</h1>
      <motion.p
        animate={{ color: hover ? "white" : "" }}
        transition={{ duration: 0.3 }}
        className="text-sm mt-3 text-gray-700"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Cards = () => {
  const cardData = [
    {
      img: "/cost.png",
      hoverImg: "/cost-hover.png",
      title: "Cost-effectiveness",
      description:
        "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      img: "/bulb.png",
      hoverImg: "/bulb-hover.png",
      title: "Innovative Technology",
      description:
        "We stay up-to-date with the latest technology trends and offer innovative solutions.",
    },
    {
      img: "/expert.png",
      hoverImg: "/expert-hover.png",
      title: "Industry Expertise",
      description:
        "We specialize in serving specific industries and offer tailored solutions that meet your unique needs.",
    },
    {
      img: "/scale.png",
      hoverImg: "/scale-hover.png",
      title: "Scalability",
      description:
        "Our solutions are scalable and can grow with your business, ensuring maximum value.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Cards;
