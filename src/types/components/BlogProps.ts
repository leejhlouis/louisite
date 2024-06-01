import ComponentProps from '@/types/components/ComponentProps'
import ArticleProps from '@/types/ArticleProps'

export default interface BlogProps extends ComponentProps {
  articles: ArticleProps[]
}
