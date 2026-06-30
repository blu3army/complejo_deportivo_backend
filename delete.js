const { ObjectId } = require("mongodb");
const connectDB = require("./db");

async function deleteLogic() {

  const { client, collection } = await connectDB();

  try {
    // Obtenemos desde la consola el ID y el nuevo monto que queremos modificar
    const id = process.argv[2];
  
    // Validamos input
    if (!id) {
      console.log("Debe indicar un id.");
      process.exit(1);
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          activo: false,
          fecha_baja: new Date()
        }
      }
    );

    console.log("Documentos dados de baja lógica:", result.modifiedCount);
    
  } finally {
    await client.close();
  }
}

deleteLogic();