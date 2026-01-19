import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/shared/Card";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <Container>
        <SectionHeader
          title="About"
          highlight="DCITC"
          subtitle="Empowering the next generation of tech innovators"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dhaka College IT Club (DCITC) is dedicated to fostering
              innovation, collaboration, and excellence in technology. We
              provide a platform for students to learn, grow, and contribute to
              the tech community through hands-on projects, workshops,
              competitions, and networking opportunities.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the leading IT club in Bangladesh, recognized for
              producing skilled professionals who drive technological innovation
              and contribute meaningfully to the global tech ecosystem.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>
                  Organize workshops and seminars on cutting-edge technologies
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>
                  Host competitive programming contests and hackathons
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>
                  Facilitate collaborative projects across multiple departments
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Provide mentorship and career guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>
                  Connect students with industry professionals and opportunities
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </div>
  );
}
