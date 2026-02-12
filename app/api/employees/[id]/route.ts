import { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function GET(request: NextRequest) {
  const params = request.params
  return NextResponse.json({
    params: params
  })
}