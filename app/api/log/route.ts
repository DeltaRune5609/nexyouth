import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    console.log('🔍 Incoming log:', body)

    return NextResponse.json({ status: 'ok', received: body }, { status: 200 })
  } catch (err) {
    console.error('❌ Error logging data:', err)
    return NextResponse.json({ status: 'error', message: 'Failed to log' }, { status: 500 })
  }
}