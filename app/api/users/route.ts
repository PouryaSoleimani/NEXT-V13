import { NextResponse } from "next/server";

export async function GET(){

  return NextResponse.json({
  message : 'HELLO FROM API'
})
}

export async function POST (){
  return NextResponse.json({
    message :'HELLO FORM POST REQUEST'
  })
}