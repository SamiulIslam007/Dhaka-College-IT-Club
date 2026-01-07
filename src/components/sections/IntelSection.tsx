"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Newspaper } from "lucide-react";
import { getRecentArticles } from "@/lib/data/articles";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/shared/Card";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";

export function IntelSection() {
  const articles = getRecentArticles(3);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#34D399]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <Container>
        <SectionHeader
          title="Latest"
          highlight="Intel"
          subtitle="Stay updated with the latest in tech, innovation, and club news"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <Link href={`/intel/${article.slug}`} className="block h-full">
                <Card
                  hover
                  className="h-full flex flex-col overflow-hidden hover:scale-[1.02] transition-all duration-300 border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <div className="relative h-48 bg-gradient-to-br from-[#7C3AED]/20 to-[#34D399]/20 flex items-center justify-center overflow-hidden shrink-0">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `
                          linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                          linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                          linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                          linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff)
                        `,
                        backgroundSize: "40px 70px",
                        backgroundPosition: "0 0, 0 0, 20px 35px, 20px 35px",
                        opacity: 0.1,
                      }}
                    ></div>

                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="primary" className="shadow-lg">
                        {article.category}
                      </Badge>
                    </div>

                    <div className="relative z-5 text-white/20 group-hover:scale-110 transition-transform duration-500">
                      <Newspaper size={64} />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#34D399] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#34D399] flex items-center justify-center text-xs font-bold text-white shadow-inner">
                          {article.authorAvatar}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            {article.author}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/intel">
            <Button
              variant="outline"
              size="lg"
              className="group   text-base h-12 px-8"
            >
              <span>View All Intel</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
