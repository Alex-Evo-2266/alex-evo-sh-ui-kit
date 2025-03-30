import { useEffect } from 'react';

export const useScrollLock = (isLocked: boolean, container: HTMLElement) => {
	useEffect(() => {
		if (isLocked) {
			const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
			container.style.overflow = 'hidden'
			container.style.paddingRight = `${scrollBarWidth}px`
		} else {
			container.style.overflow = '';
			container.style.paddingRight = '';
		}

		return () => {
			container.style.overflow = '';
			container.style.paddingRight = '';
		};
	}, [isLocked]);
};
