import { Layout } from '@/components/layout'
import {
  AboutHeroSection,
  ProfessionalBackgroundSection,
  SkillsExpertiseSection,
} from '@/components/sections'
import { Navigation } from '@/components/ui/Navigation'
import { resume } from '@/data/resume'

export default function About() {
  return (
    <Layout
      title={`About | ${resume.name}`}
      description={`Learn more about ${resume.name}'s background, skills, and experience in QA Engineering`}
    >
      <AboutHeroSection />
      <ProfessionalBackgroundSection />
      <SkillsExpertiseSection />
      <Navigation />
    </Layout>
  )
}
