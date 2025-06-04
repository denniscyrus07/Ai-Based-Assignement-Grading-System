import { NextRequest, NextResponse } from "next/server";
import { createAssignment } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const assignment = createAssignment(body);
  return NextResponse.json(assignment);
}
