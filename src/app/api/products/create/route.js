import { writeFileSync } from 'fs';

export async function POST(request) {
    const body = await request.json();

    const name = body.name;
    const email = body.email;

    // Leer JSON
    const jsonData = require('../data.json');

    // Crear nuevo producto
    const newProduct = {
        id: jsonData.length + 1,
        name,
        email
    };

    // Agregar y escribir archivo
    jsonData.push(newProduct);
    writeFileSync('../data.json', JSON.stringify(jsonData));

    return new Response({ message: 'Producto agregado' });

}