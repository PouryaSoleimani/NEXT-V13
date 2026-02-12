//^ EMPLOYEES ROUTE ===================================================================================================
import { NextResponse } from "next/server";

//* MOCK DATAS
const data = [
  { id: 1, name: "POURYA", job: 'FRONTEND DEVELOPER' },
  { id: 2, name: "MAMAD", job: 'BACKEND DEVELOPER' },
  { id: 3, name: "ALI", job: 'FULLSTACK DEVELOPER' },
  { id: 4, name: "REZA", job: 'UI/UX DESIGNER' },
  { id: 5, name: "MEHDI", job: 'DEVOPS' },
  { id: 6, name: "MOJTABA", job: 'PROJECT MANAGER' },
  { id: 7, name: "MORTEZA", job: 'FULLSTACK DEVELOPER' },
  { id: 8, name: "MAJID", job: 'MOBILE DEVELOPER' }
]

// GET ALL EMPLOYEES
export async function GET() {
  try {
    return NextResponse.json({
      ok: true,
      message: 'EMPLOYEES GET FUNCTION ',
      length: data.length.toString() + ' ITEMS', data: data
    })
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message }
    }
  }
}
