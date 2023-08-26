import constants from '@/constants'

export default function getGitHubUrl(repoName: string) {
  const githubUrl = `https://github.com/${constants.social.github}`
  return `${githubUrl}/${repoName}`
}
