import { motion, AnimatePresence } from "framer-motion";
import React, { useCallback } from "react";

const AnimatedAOLSections = React.memo(function AnimatedAOLSections({
	AOL,
	currentIndex,
}) {
	return (
		<AnimatePresence>
			<div className="h1__wrapper">
				<motion.h3
					key={currentIndex}
					initial={{ opacity: 1, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, type: "tween" }}
					className="heading"
				>
					{AOL[currentIndex].title}
				</motion.h3>
			</div>

			<div className="p__wrapper">
				<motion.p
					key={currentIndex}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, type: "tween" }}
					className="copy"
				>
					{AOL[currentIndex].description}
				</motion.p>
			</div>
		</AnimatePresence>
	);
});

export default AnimatedAOLSections;
