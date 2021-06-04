import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, dispatch) {
    useEffect(() => {
    
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
               dispatch()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
           
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.dispatch);

    return <div ref={wrapperRef}>{props.children}</div>;
}