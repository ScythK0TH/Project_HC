// @ts-ignore
let intersectionObserver;

function ensureIntersectionObserver() {
	// @ts-ignore
	if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
				entry.target.dispatchEvent(new CustomEvent(eventName));
			});
		}
	);
}

// @ts-ignore
export default function viewport(element) {
	ensureIntersectionObserver();

	// @ts-ignore
	intersectionObserver.observe(element);

	return {
		destroy() {
			// @ts-ignore
			intersectionObserver.unobserve(element);
		}
	}
}