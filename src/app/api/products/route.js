import { NextResponse } from 'next/server';
import users from './data.json';

async function getData() {
    // Aquí haría la llamada a tu API, pero de momento, cojo la información del data.json.
    return users;
}

export async function GET() {
    const data = await getData();
    return NextResponse.json(data);
}