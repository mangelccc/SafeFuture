import React from "react";
import AuthContexto from "./AuthContexto.jsx";
import DietasContexto from "./DietasContexto.jsx";
import AlimentosContexto from "./AlimentosContexto.jsx";
import ProvedorEjercicios from "./EjerciciosContexto.jsx";
import ProvedorEntrenamiento from "./EntrenamientoContexto.jsx";
import NoFumarContexto from "./NoFumarContexto.jsx";

const Proveedores = ({ children }) => {
    return (
        <AuthContexto>
            <AlimentosContexto>
                <DietasContexto>
                    <ProvedorEjercicios>
                        <ProvedorEntrenamiento>
                            <NoFumarContexto>
                                {children}
                            </NoFumarContexto>
                        </ProvedorEntrenamiento>
                    </ProvedorEjercicios>
                </DietasContexto>
            </AlimentosContexto>
        </AuthContexto>
    );
};

export default Proveedores;
