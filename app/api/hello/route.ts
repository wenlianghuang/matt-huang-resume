import { NextResponse } from 'next/server';

export async function GET() {
  // 返回一段 JSON 資料
  return NextResponse.json({ message: 'Hello from Vercel Serverless Function!' });
}