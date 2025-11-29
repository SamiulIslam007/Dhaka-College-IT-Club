// src/app/api/achievements/route.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * এই ফাংশনটি /api/achievements-এ GET রিকোয়েস্ট হ্যান্ডেল করে।
 * এটি সকল অর্জনের (Achievements) তালিকা JSON ফরম্যাটে ফেরত দেবে।
 * * @param request - Next.js Request অবজেক্ট।
 * @returns - JSON রেসপন্স হিসেবে অর্জনের তালিকা।
 */
export async function GET(request: NextRequest) {
  // ভবিষ্যতে: এখানে আপনি আপনার core/services/achievement.service.ts
  // থেকে getAllAchievements() ফাংশনটিকে কল করবেন যা PostgreSQL থেকে ডেটা আনবে।

  // আপাতত বিল্ড ত্রুটি দূর করতে এবং API রুটটি সচল রাখতে একটি ডামি (Dummy) ডেটা ব্যবহার করা হচ্ছে:
  const dummyAchievements = [
    {
      id: 1,
      title: "ক্লাব চ্যাম্পিয়নশিপ জয়",
      date: "2025-10-10",
      domain: "Coding",
    },
    {
      id: 2,
      title: "ওয়েব ডিজাইন প্রতিযোগিতা",
      date: "2025-11-20",
      domain: "Design",
    },
    {
      id: 3,
      title: "সাইবার নিরাপত্তা সেমিনার আয়োজন",
      date: "2025-09-05",
      domain: "Security",
    },
  ];

  // সফল HTTP 200 রেসপন্স হিসেবে JSON ডেটা ফেরত দেওয়া
  return NextResponse.json(dummyAchievements, { status: 200 });
}
