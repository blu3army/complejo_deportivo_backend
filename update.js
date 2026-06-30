const { ObjectId, BSON } = require("mongodb");
const connectDB = require("./db");

async function update() {

  const { client, collection } = await connectDB();

  try {
    // Obtenemos desde la consola el ID y el nuevo monto que queremos modificar
    const id = process.argv[2];
    const new_amount = Number(process.argv[3]);

    // Validamos los inputs
    if (!id) {
      console.log("Debe indicar un id.");
      process.exit(1);
    }

    if (!Number.isInteger(new_amount) || new_amount < 0) {
      console.log("Debe indicar un monto entero válido.");
      process.exit(1);
    }

    // Ejecutamos el update
    const result = await collection.updateOne(
      { _id: new ObjectId(id), activo: true },
      {
        $set: {
          monto_total: new BSON.Int32(new_amount)
        }
      }
    );

    console.log("Documentos modificados:", result.modifiedCount);
  
} catch (error) {
    
    console.log("Error al actualizar:");
    console.dir(error.errInfo?.details, { depth: null });
    console.log(error.message);
    
  } finally {
    await client.close();
  }
}

update();