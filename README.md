# GitHub User Activity Viewer

Este es un CLI (Command Line Interface) en Node.js que permite visualizar la actividad reciente de un usuario de GitHub. Obtiene los eventos recientes asociados a un usuario específico utilizando la API de GitHub.

## Instalación

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.
2. Clona o descarga este repositorio.
3. Da permisos de ejecución al script:
   ```bash
   chmod +x script.js
   ```
4. ejecuta el siguiente comando
   ```bash
   npm link
   ```

## Uso

Ejecuta el CLI pasando el nombre de usuario de GitHub como argumento:

```bash
github-activity <nombre-de-usuario>
```

Por ejemplo:
```bash
github-activity octocat
```

El CLI mostrará un resumen de las actividades recientes del usuario especificado.

### Salida Ejemplo

```bash
🔵 Pushed 2 commits to octocat/Hello-World
🔵 Created branch feature at octocat/Hello-World
🔵 Deleted branch bugfix at octocat/Hello-World
```

## Tipos de Actividad Soportados

El CLI interpreta los siguientes tipos de eventos de GitHub:

- **PushEvent**: Muestra la cantidad de commits realizados en un repositorio.
- **CreateEvent**: Informa la creación de repositorios o ramas.
- **DeleteEvent**: Informa la eliminación de ramas o repositorios.

Si hay actividades que no están soportadas, no se mostrarán en la salida.

## Manejo de Errores

El CLI incluye manejo básico de errores:

- Si no se proporciona un nombre de usuario, se lanzará un error indicando que es necesario.
- Si el usuario no tiene actividades recientes o no existe, mostrará un mensaje apropiado.
- Si ocurre un problema al comunicarse con la API de GitHub, se mostrará un mensaje de error.

## Dependencias

El CLI utiliza las siguientes dependencias:

- [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API): Para realizar solicitudes HTTP a la API de GitHub.

## Notas

- Este CLI utiliza la API pública de GitHub, que está sujeta a límites de uso. Para solicitudes más intensivas, considera usar un token de acceso personal para autenticación.
- Para agregar autenticación con token, actualiza el encabezado de la solicitud:
  ```javascript
  const response = await fetch(`https://api.github.com/users/${user}/events`, {
    headers: {
      'Authorization': 'Bearer <tu-token-aqui>'
    }
  });
  ```

## Licencia

Este proyecto está disponible bajo la [MIT License](LICENSE).

---

¡Disfruta explorando la actividad de los usuarios en GitHub! 🚀
