import { useState, useContext, useEffect } from 'react';
import { supabaseConexion } from '../conexionSupabase/supabase.js';
import { contextoSesion } from '../contextos/ProveedorSesion.jsx';

const useDatosDeLista = (id_lista) => {
    const [totales, setTotales] = useState(null); 
    /* Voy a crear un estado para indicar mas tarde que se estan cargando los totales. */
    const [loading, setLoading] = useState(true);
    const { usuario } = useContext(contextoSesion);

    useEffect(() => {
        const fetchDatos = async () => {
            try {
                setLoading(true);
                // Consulta: obtenemos los registros de productos_listas con join a la tabla productos.
                const { data, error } = await supabaseConexion
                    .from('productos_listas')
                    .select('cantidad, producto:productos (precio,peso)')
                    .eq('id_lista', id_lista);

                if (error) {
                    throw error;
                }
                let totalProductos = 0;
                let totalPrecio = 0;
                let totalPeso = 0;

                // Recorremos cada registro y acumulamos los totales
                data.map(item => {
                    const cantidad = Number(item.cantidad);
                    const precio = item.producto ? Number(item.producto.precio) : 0;
                    const peso = item.producto ? Number(item.producto.peso) : 0;

                    totalProductos += cantidad;
                    totalPrecio += cantidad * precio;
                    totalPeso += cantidad * peso;
                });

                // Redondeamos totalPrecio y totalPeso a dos decimales.
                totalPrecio = Number(totalPrecio.toFixed(2));
                totalPeso = Number(totalPeso.toFixed(2));

                setTotales({ totalProductos, totalPrecio, totalPeso });
            } catch (error) {
                console.error("Error al obtener datos de la lista:", error);
            } finally {
                setLoading(false);
              }
        };

        if (id_lista && usuario) {
            fetchDatos();
        }
    }, [id_lista]);
    
    return { totales, loading };
};

export default useDatosDeLista;
