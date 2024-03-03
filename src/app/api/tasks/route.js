import { NextResponse } from "next/server";
import { dbConnect } from '../../../utils/db';
import Task from "../../../models/Task";

export async function GET() {
  dbConnect()
  const tasks = await Task.find()
  return NextResponse.json(tasks);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newTask = new Task(body);
    const savedTask = await newTask.save();
    return NextResponse.json(savedTask);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}