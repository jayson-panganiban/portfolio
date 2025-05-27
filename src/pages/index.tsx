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
      <HeroSection /> {/* bg-black */}
      <AboutSection /> {/* bg-gray-900 */}
      <SkillsSection /> {/* bg-black */}
      <WorkSection /> {/* bg-gray-900 */}
      <ProjectsSection /> {/* bg-black, bg-gray-900, bg-black */}
      <Navigation />
    </Layout>
  )
}
