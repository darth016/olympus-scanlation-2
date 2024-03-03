import { NextResponse } from "next/server";
import { dbConnect } from '../../../utils/db';

export function GET() {
  dbConnect()
  return NextResponse.json({ hello: "world" });
}