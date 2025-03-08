import { Layout } from '@/components/layout'
import {
  FeaturedProjectsSection,
  OtherProjectsSection,
  ProjectsHeroSection,
} from '@/components/sections'
import { Navigation } from '@/components/ui'

export default function Projects() {
  return (
    <Layout
      title='Projects | Jayson Panganiban'
      description="Explore Jayson Panganiban's hobby and side projects"
    >
      <ProjectsHeroSection />
      <FeaturedProjectsSection />
      <OtherProjectsSection />
      <Navigation />
    </Layout>
  )
}
