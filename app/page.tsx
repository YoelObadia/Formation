import { Header } from "@/components/Header";
import { InteractiveHero } from "@/components/InteractiveHero";
import { PhilosophySection } from "@/components/PhilosophySection";
import { TechStack } from "@/components/TechStack";
import { AITerminal } from "@/components/AITerminal";
import { WhyNowSection } from "@/components/WhyNowSection";
import { MethodSection } from "@/components/MethodSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { FormatSection } from "@/components/FormatSection";
import { CTABlock } from "@/components/CTABlock";
import { TeamSection } from "@/components/TeamSection";
import { ProgramSection } from "@/components/ProgramSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { LeadFormSection } from "@/components/LeadFormSection";
import { MouseGlow } from "@/components/ui/MouseGlow";
import BrainCanvas from "@/components/BrainCanvas";

// Import data
import content from "@/src/data/content.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[var(--color-brand-orange)] selection:text-white relative">
      {/* Global Dynamic Background */}
      <BrainCanvas className="pointer-events-none" /> {/* Full opacity */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.1)_0%,_rgba(0,0,0,0.7)_100%)] pointer-events-none" />

      {/* Scrollable Content */}
      <div className="relative z-10">
        <MouseGlow />
        <Header data={content.header} />
        <InteractiveHero data={content.hero} />
        <TechStack />
        <PhilosophySection data={content.philosophy} />
        <WhyNowSection data={content.why_now} title_label={content.section_titles.why_now} />
        <MethodSection data={content.method} title_label={content.section_titles.method} />
        <OutcomesSection data={content.outcomes} title_label={content.section_titles.outcomes} />
        <TargetAudienceSection
          data={content.target_audience}
          title={content.section_titles.target}
        />
        <AITerminal />
        <ProgramSection
          data={content.curriculum}
          title={content.section_titles.program}
          subtitle={content.section_titles.program_subtitle}
        />
        <FormatSection data={content.format} title_label={content.section_titles.format} />
        <TeamSection
          data={content.team}
          title={content.section_titles.team}
        />
        {/*<CTABlock data={content.cta_block} />*/}
        <LeadFormSection data={content.form} />
      </div>
    </main>
  );
}
