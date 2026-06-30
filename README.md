# CRUD MongoDB - Trabajo Práctico

## Requisitos

- Node.js instalado
- MongoDB Atlas
- Archivo `.env` configurado

---

## Instalación

Instalar las dependencias del proyecto:

```bash
npm install
```

---

## Configuración

Crear un archivo `.env` en la raíz del proyecto con las variables necesarias para conectarse a MongoDB Atlas.

Ejemplo:

```env
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/
DB_NAME=complejo_deportivo
COLLECTION_NAME=reservas
```

---

## Ejecución

### Leer documentos

```bash
node read.js
```

### Crear un documento

```bash
node create.js
```

### Actualizar un documento

```bash
node update.js 6a186d0542b66637303682d3 7500
```

Donde:

- Primer parámetro: **ID del documento**
- Segundo parámetro: **Nuevo monto total**

### Baja lógica de un documento

```bash
node delete.js 6a186d0542b66637303682d3
```

Donde:

- Primer parámetro: **ID del documento a desactivar**
