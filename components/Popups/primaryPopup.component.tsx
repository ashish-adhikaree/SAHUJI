import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const PrimaryPopup = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.15 }}
      exit={{ scale: 0, opacity: 0 }}
      className="absolute bg-gray-100 top-[40px] right-0 z-[50] p-5 origin-top min-w-[300px] rounded-md"
    >
      {children}
    </motion.div>
  );
};
