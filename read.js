const connectDB = require("./db");

async function read() {
  const { client, collection } = await connectDB();

  try {
    const componentes = await collection
      .find({ activo: true })
      .toArray();

    console.log("Componentes activos:");
    console.log(componentes);
  } finally {
    await client.close();
  }
}

read();