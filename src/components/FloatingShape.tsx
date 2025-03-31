import { motion } from "framer-motion";

const FloatingShape = ({ color, size, top, left }) => {
	return (
		<motion.div
			className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl`}
			style={{ top, left }} // Ensure props are passed correctly
			aria-hidden="true"
		/>
	);
};

export default FloatingShape;
