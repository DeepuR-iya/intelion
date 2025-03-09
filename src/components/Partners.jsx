import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    id: "1",
    img: "/aws.png",
    alt: "aws",
    url: "https://aws.amazon.com/",
    title: "AWS",
  },
  {
    id: "2",
    img: "/meta.png",
    alt: "meta",
    url: "https://aws.amazon.com/",
    title: "Meta",
  },
  {
    id: "3",
    img: "/microsoft.png",
    alt: "microsoft",
    url: "https://aws.amazon.com/",
    title: "Microsoft",
  },
  {
    id: "4",
    img: "/apple.png",
    alt: "apple",
    url: "https://aws.amazon.com/",
    title: "Apple",
  },
  {
    id: "5",
    img: "/googlecloud.png",
    alt: "googlecloud",
    url: "https://aws.amazon.com/",
    title: "Google Cloud",
  },
  {
    id: "6",
    img: "/adobe.png",
    alt: "adobe",
    url: "https://aws.amazon.com/",
    title: "Adobe",
  },
  {
    id: "7",
    img: "/salesforce.png",
    alt: "salesforce",
    url: "https://aws.amazon.com/",
    title: "Salesforce",
  },
  {
    id: "8",
    img: "/netflix.png",
    alt: "netflix",
    url: "https://aws.amazon.com/",
    title: "Netflix",
  },
];

const MarqueeItem = () => {
  return (
    <>
      <h1 className="text-4xl font-bold ml-8 my-10" id="partners">
        OUR PRECIOUS PARTNERS
      </h1>
      <div className="container mx-auto overflow-hidden mb-8">
        <div className="flex MyGradient whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="flex gap-20 flex-shrink-0 mx-10"
            >
              {data.map((e, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <img className="h-24" src={e.img} alt={e.alt}></img>
                  <span className="font-bold">{e.title}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="container mx-auto overflow-hidden mt-8">
        <div className="flex MyGradient whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="flex gap-20 flex-shrink-0 mx-10"
            >
              {data.map((e, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <span className="font-bold">{e.title}</span>
                  <img className="h-24" src={e.img} alt={e.alt}></img>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarqueeItem;

// const Partners = () => {
//   return (
//     <div>
//       <h1>Our Partners</h1>
//       <div className="container mx-auto">
//         <div className="border">
//           <motion.div className="flex gap-12">
//             {data.map((item) => {
//               return (
//                 <
//                   }}
//                 >
//                   <a
//                     href={item.url}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex flex-col items-center"
//                   >
//                     <img src={item.img} alt={item.alt} className="h-24" />
//                     <span className="font-bold">{item.title}</span>
//                   </a>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners;
