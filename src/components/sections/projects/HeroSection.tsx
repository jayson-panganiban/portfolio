import { TerminalOutput } from '@/components/snippets/TerminalOutput'
import { SectionHeader, TerminalCommand, TerminalWindow } from '@/components/ui'

export const ProjectsHeroSection: React.FC = () => {
  return (
    <section className='pt-24 md:pt-32 pb-16 md:pb-20 bg-black'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-3xl mx-auto'>
          <SectionHeader
            title='Side Quests'
            description="A mix of weekend projects that scratched my own itch and fun ideas I couldn't resist building in my spare time."
          />

          <TerminalWindow className='border border-emerald-500/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]'>
            <TerminalCommand command='ls' args='-la ~/projects' className='mb-2 md:mb-4' />
            {/* Terminal Output Summary */}
            <div className='text-gray-400 mb-1 text-xs md:text-sm'>total 5 items, 3 featured</div>
            <TerminalOutput />
          </TerminalWindow>
        </div>
      </div>
    </section>
  )
}
