import { useState, useEffect, useMemo } from 'react';

const useIntersection = (targetRef, options) => {
	const [isVisible, setIsVisible] = useState();

	const callbackFunction = entries => {
		const entry = entries[0];
		setIsVisible(entry.isIntersecting);
	};

	const optionsObject = useMemo(() => {
		return options;
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(callbackFunction, optionsObject);
		const target = targetRef.current;
		if (target) observer.observe(target);

		return () => {
			if (target) observer.unobserve(target);
		};
	}, [targetRef, optionsObject]);

	return isVisible;
};

export default useIntersection;
