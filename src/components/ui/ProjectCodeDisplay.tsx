import { ReactElement } from 'react'
import { Project } from '../../data/projects'
import {
  DefaultCodeSnippet,
  FAQMateSnippet,
  HalfPriceGrocerySnippet,
  PHZipCodesSnippet,
  PHZipCodesWebSnippet,
  RephraseSnippet,
  RestInPytestSnippet,
} from '../snippets'

interface ProjectCodeDisplayProps {
  project: Project
}

export const ProjectCodeDisplay: React.FC<ProjectCodeDisplayProps> = ({ project }) => {
  const getProjectSnippet = (project: Project): ReactElement => {
    switch (project.id) {
      case 1:
        return <PHZipCodesWebSnippet />
      case 2:
        return <HalfPriceGrocerySnippet />
      case 3:
        return <RephraseSnippet />
      case 4:
        return <RestInPytestSnippet />
      case 5:
        return <PHZipCodesSnippet />
      case 6:
        return <FAQMateSnippet />
      default:
        return <DefaultCodeSnippet />
    }
  }

  return getProjectSnippet(project)
}
