import { Layout } from '@/components/layout'
import { AboutSection, HeroSection, RecentProjectsSection } from '@/components/sections'

export default function Home() {
  return (
    <Layout title='Jayson Panganiban' description='Welcome to my portfolio website!'>
      <HeroSection />
      <AboutSection />
      <RecentProjectsSection />
    </Layout>
  )
}
