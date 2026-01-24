import { NextResponse } from "next/server";

export async function GET(){

  return NextResponse.json({
  message : 'HELLO FROM API'
})
}

export async function POST (req : Request){
  // const {username} = req.body
  return NextResponse.json({
    message :'HELLO FORM POST REQUEST'
  })
}