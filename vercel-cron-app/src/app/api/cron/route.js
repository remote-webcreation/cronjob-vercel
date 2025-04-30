import { NextResponse, NEXTResponse } from 'next/server';

export async function GET() {
    const jetzt = new Date().toISOString();
    console.log(`Cronjob wurde ausgeführt: 'Cronjob ausgeführt um: ${jetzt}`);
    return NextResponse.json({ nachricht: `Cronjob augeführt um: ${jetzt}` });
}