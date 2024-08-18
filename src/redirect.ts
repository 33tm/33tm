"use server"

import { redirect } from "next/navigation"

export default async (url: string) => redirect(url)