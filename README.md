# SafeFuture

Este proyecto está organizado en diferentes ramas para mantener un flujo de trabajo eficiente y ordenado:

- **Rama master**: Aquí subiremos los cambios más importantes cuando completemos fases clave del proyecto. Esta rama contiene la versión estable del proyecto.
- **Rama develop**: En esta rama integramos los cambios que van surgiendo desde otras ramas, permitiendo consolidar avances en el desarrollo.
- **Ramas FrontEnd y Backend**: Mi compañero y yo trabajamos en estas ramas específicas, donde desarrollamos y refinamos las funcionalidades del front-end y back-end respectivamente.

## Enlaces

- **Google Drive**: https://bit.ly/42dvDNs
- **Entidad Relación**: https://bit.ly/406Iq1e

## Ejemplo de Ejecución para Subir Cambios a Develop

**Por si falla el pull**:
   ```bash
   git restore .
   ```

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

## Instalación del Frontend

Este documento describe los pasos necesarios para instalar y configurar el frontend del proyecto.

**Requisitos previos**
Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

**Paso 1: Instalar las dependencias del proyecto**
<div style="page-break-before: always;"></div>
Ejecuta el siguiente comando en la terminal para instalar todas las dependencias del proyecto especificadas en el archivo `package.json`:

```bash
npm install
```

**Paso 2: Instalar Font Awesome para React**
<div style="page-break-before: always;"></div>
Para agregar soporte de iconos con Font Awesome en el proyecto, ejecuta el siguiente comando:

```bash
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

**Descripción de los paquetes instalados:**
- SweetAlert2: Biblioteca para mostrar alertas personalizadas y modernas con diseños atractivos y opciones avanzadas.
- Font Awesome: Biblioteca de iconos escalables basada en CSS y SVG que proporciona una amplia colección de iconos personalizables.
- Tailwind CSS: Framework de CSS utilitario que permite diseñar interfaces de manera rápida usando clases predefinidas.
- Cookie Consent: Biblioteca para mostrar avisos de consentimiento de cookies de forma personalizable y cumplir con normativas como GDPR.


**Ejecución**
<div style="page-break-before: always;"></div>
Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo con el siguiente comando:

```bash
npm run dev
```

Esto abrirá la aplicación en tu navegador en la dirección [http://localhost:5173](http://localhost:5173) (por defecto).

¡Listo! El frontend está configurado y listo para usarse.


## Autores

- Miguel Ángel Grimal Lopez
- Miguel Hernández Monllor
