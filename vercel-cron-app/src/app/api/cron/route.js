import { NextResponse, NEXTResponse } from 'next/server';

export async function GET(request) {
    const authHeader = request.headers.get('Authorization');
    const cronSecret = process.env.CRON_SECRET;
  
    if (!authHeader || authHeader !== `Bearer ${cronSecret}`) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
  
    const jetzt = new Date().toISOString();
    console.log(`Cronjob wurde sicher ausgeführt um: ${jetzt}`);
    return NextResponse.json({ nachricht: `Cronjob sicher ausgeführt um: ${jetzt}` });
}