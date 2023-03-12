import React, { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;
type Handler = (event: Event) => void;

export default function useOnClickOutside(
	ref: React.RefObject<HTMLElement>,
	handler: Handler
) {
	if (typeof document === "undefined") {
		return;
	}

	useEffect(() => {
		const listener = (event: Event) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event?.target as Node)) {
				return;
			}
			handler(event);
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
}
