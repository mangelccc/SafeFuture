# SafeFuture

Este proyecto está organizado en diferentes ramas para mantener un flujo de trabajo eficiente y ordenado:

- **Rama master**: Aquí subiremos los cambios más importantes cuando completemos fases clave del proyecto. Esta rama contiene la versión estable del proyecto.
- **Rama develop**: En esta rama integramos los cambios que van surgiendo desde otras ramas, permitiendo consolidar avances en el desarrollo.
- **Ramas FrontEnd y Backend**: Mi compañero y yo trabajamos en estas ramas específicas, donde desarrollamos y refinamos las funcionalidades del front-end y back-end respectivamente.

## Enlaces

- **Google Drive**: https://bit.ly/42dvDNs
- **Entidad Relación**: https://bit.ly/406Iq1e

## Ejemplo de Ejecución para Subir Cambios a Develop

A continuación, se detalla el proceso para subir los cambios a Develop:

1. **Agrega los archivos que has modificado o creado**:
   ```bash
   git add [carpeta_de_tu_trabajo]
   ```
   Asegúrate de especificar la carpeta o los archivos que deseas incluir en el commit.

2. **Realiza un commit describiendo los cambios realizados**:
   ```bash
   git commit -m "Descripción clara de lo que has hecho"
   ```

3. **Cámbiate a la rama `develop`**:
   Antes de continuar, verifica que estás en la rama correcta:
   ```bash
   git checkout develop
   ```

4. **Actualiza la rama `develop` con los últimos cambios del repositorio remoto**:
   Es importante traer los cambios recientes antes de hacer un merge:
   ```bash
   git pull origin develop
   ```

5. **Realiza el merge de tu rama a `develop`**:
   Si los cambios están en una rama diferente, realiza el merge desde esa rama a `develop`:
   ```bash
   git merge [nombre_de_tu_rama]
   ```

6. **Sube los cambios al repositorio remoto**:
   Una vez completado el merge, envía los cambios al repositorio:
   ```bash
   git push origin develop
   ```

### Ejemplo Completo:
Supongamos que estás trabajando en una carpeta llamada `nueva_funcionalidad` y has terminado tus cambios:

```bash
# Agregar los cambios realizados
$ git add nueva_funcionalidad

# Crear un commit describiendo los cambios
$ git commit -m "Agregada nueva funcionalidad para X"

# Cambiar a la rama develop
$ git checkout develop

# Actualizar la rama develop
$ git pull

# Realizar el merge de la rama actual a develop
$ git merge nueva_funcionalidad

# Subir los cambios al repositorio
$ git push
```

Recuerda siempre seguir este flujo para evitar conflictos y mantener el código actualizado.

## Autores

- Miguel Ángel Grimal
- Miguel Hernández Monllor
