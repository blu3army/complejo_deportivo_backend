const { ObjectId } = require("mongodb");
const connectDB = require("./db");



async function create() {
  const { client, collection } = await connectDB();

  try {

    const nuevaReserva = {
        usuario_id: new ObjectId('6a186bd042b66637303682d1'),
        cancha_id: new ObjectId('6a186c0442b66637303682d2'),
        fecha: '2026-06-16',
        hora_inicio: '18:00',
        hora_fin: '19:00',
        estado: 'pendiente',
        monto_total: 5000,
        cancha: { nombre: 'Cancha 3', tipo: 'futbol 7', precio_por_turno: 5000 },
        activo: true,
        fecha_baja: null
    };

    const result = await collection.insertOne(nuevaReserva);

    console.log("Documento creado con ID:", result.insertedId);

  } finally {
    await client.close();
  }
}

create();