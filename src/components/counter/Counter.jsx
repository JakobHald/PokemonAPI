import { useEffect } from "react";
import styles from "./counter.module.css";

const Counter = ({ setPokeCount }) => {
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowDown") {
                setPokeCount((count) => (count >= 4 ? 0 : count + 1));
            } else if (event.key === "ArrowUp") {
                setPokeCount((count) => (count <= 0 ? 4 : count - 1));
            }
        };


        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
        
    }, [setPokeCount]);

    
};

export default Counter;
