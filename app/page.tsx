import { Header } from "@/components/Header";
import { InteractiveHero } from "@/components/InteractiveHero";
import { PhilosophySection } from "@/components/PhilosophySection";
import { TechStack } from "@/components/TechStack";
import { AITerminal } from "@/components/AITerminal";
import { TeamSection } from "@/components/TeamSection";
import { ProgramSection } from "@/components/ProgramSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { LeadFormSection } from "@/components/LeadFormSection";
import content from "@/src/data/content.json";
import { MouseGlow } from "@/components/ui/MouseGlow";

export default function Home() {
  if (!content || !content.header) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-[#020817] text-white selection:bg-[var(--color-brand-orange)] selection:text-white">
      <MouseGlow />
      <Header data={content.header} />
      <InteractiveHero data={content.hero} />
      <PhilosophySection data={content.philosophy} />
      <TechStack />
      <TeamSection
        data={content.team}
        title={content.section_titles.team}
      />
      <AITerminal />
      <ProgramSection
        data={content.curriculum}
        title={content.section_titles.program}
        subtitle={content.section_titles.program_subtitle}
      />
      <TargetAudienceSection
        data={content.target_audience}
        title={content.section_titles.target}
      />
      <LeadFormSection data={content.form} />
    </main>
  );
}
