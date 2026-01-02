"use client";

import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/shared/SocialLinks";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export default function DeveloperPage() {
  const mySocialLinks = {
    facebook: "https://www.facebook.com/smdevx",
    linkedin: "https://www.linkedin.com/in/smdevx",
    github: "https://github.com/SamiulIslam007",
    portfolio: "https://samiul.vercel.app",
    email: "samiul.code@gmail.com",
  };

  return (
    <div className="min-h-screen py-20 bg-dot-pattern">
      <Container>
        <Reveal>
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-2/5 h-[400px]">
                <Image
                  src="/samiul-profile.jpg"
                  alt="Samiul Islam"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2">
                  Developer
                </span>
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Md. Samiul Islam
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Assalamu Alaikum! I am a passionate Full-stack Developer and a
                  student of Dhaka College. I love building modern web
                  applications and exploring new technologies. I led the
                  development of the DCITC official website.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="font-bold">Focus:</span> Web Development &
                    Cyber Security
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="font-bold">Batch:</span> DC-27
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-3">Connect with me:</p>
                  <SocialLinks links={mySocialLinks} iconSize={22} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
