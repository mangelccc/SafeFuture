import { useTema } from "../../contextos/TemaContexto.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const BotonTema = ({desactivar}) => {
    const { tema, alternarTema } = useTema();
    return (
        <button
        
    onClick={!desactivar && alternarTema}
    className="flex p-2 mr-4 self-center rounded-full bg-black1 dark:bg-gray-200
                hover:shadow-[0_0_15px_#6B46C1]"
>

            {tema === "dark" ?
                <FontAwesomeIcon
                className="w-8 h-8 transition-transform duration-300 transform rotate-0 scale-0 text-yellow-500 dark:rotate-180 dark:scale-100 dark:text-purple-500 "
                icon={faSun}
            />
            :
            <FontAwesomeIcon
                className="w-8 h-8 transition-transform duration-300 transform rotate-180 scale-0 text-purple dark:rotate-0 dark:scale-100 dark:text-yellow-500"
                icon={faMoon}
            />
            }
        </button>
    );
};

export default BotonTema;
