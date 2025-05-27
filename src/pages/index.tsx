import { Layout } from '@/components/layout'
import {
  AboutSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  WorkSection,
} from '@/components/sections'
import { Navigation } from '@/components/ui/Navigation'

export default function Home() {
  return (
    <Layout title='Jayson Panganiban' description='Welcome to my portfolio website!'>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ProjectsSection />
      <Navigation />
    </Layout>
  )
}
