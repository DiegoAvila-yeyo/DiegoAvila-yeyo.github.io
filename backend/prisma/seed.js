import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Limpiamos la base de datos por si acaso
  await prisma.moodTag.deleteMany();
  await prisma.product.deleteMany();

  // 1. Producto para Mood: Cansado (Energía)
  const p1 = await prisma.product.create({
    data: {
      name: "Espresso Doble de Especialidad",
      description: "Grano veracruzano con notas de chocolate oscuro y alta cafeína.",
      price: 45.0,
      category: "Café",
      image: "espresso.jpg",
      moods: {
        create: [{ name: "Energía" }, { name: "Cansado" }]
      }
    }
  });

  // 2. Producto para Mood: Estresado (Relax)
  const p2 = await prisma.product.create({
    data: {
      name: "Té de Lavanda y Miel",
      description: "Infusión relajante ideal para bajar el ritmo del día.",
      price: 55.0,
      category: "Infusión",
      image: "te-relax.jpg",
      moods: {
        create: [{ name: "Relax" }, { name: "Estresado" }]
      }
    }
  });

  // 3. Producto para Mood: Caluroso (Fresco)
  const p3 = await prisma.product.create({
    data: {
      name: "Cold Brew Tonic",
      description: "Café extraído en frío por 18 horas, refrescante y burbujeante.",
      price: 65.0,
      category: "Bebida Fría",
      image: "cold-brew.jpg",
      moods: {
        create: [{ name: "Fresco" }, { name: "Caluroso" }]
      }
    }
  });

  console.log("🌱 ¡Base de datos poblada con éxito!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });