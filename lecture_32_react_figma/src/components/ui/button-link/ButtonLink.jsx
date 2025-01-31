import st from "./ButtonLink.module.scss";
import { Link } from "react-router";

export default function ButtonLink({ type, to, text, handlerOnClick, className }) {
    return (
        <div>
            {type === "link" ? (
                <Link to={to} text={text} className={st.btn}>
                    {text}
                </Link>
            ) : (
                <button onClick={handlerOnClick} text={text} className={st.btn}>
                    {text}
                </button>
            )}
        </div>
    );
}