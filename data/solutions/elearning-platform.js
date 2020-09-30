export const designImages = {
  base: require.context(
    '../../public/images/solutions/elearning-platform/design/base?csssr-images',
  ),
  color: require.context(
    '../../public/images/solutions/elearning-platform/design/color?csssr-images',
  ),

  theme: require.context(
    '../../public/images/solutions/elearning-platform/design/theme?csssr-images',
  ),

  font: require.context(
    '../../public/images/solutions/elearning-platform/design/font?csssr-images',
  ),

  graphic: require.context(
    '../../public/images/solutions/elearning-platform/design/graphic?csssr-images',
  ),
}

export const featureImages = {
  payment: {
    images: require.context(
      '../../public/images/solutions/elearning-platform/advanced-features/payment?csssr-images',
    ),
    heading: 'Add any payment provider you like',
    description:
      'Though we have the most popular providers built-in our system, we’re aware that there is no perfect solution that fits all. We can make the module work with any payment provider or a bank, even a cryptocurrency. Whatever you need, as long as it is connected to the Internet.',
  },
  skill: {
    images: require.context(
      '../../public/images/solutions/elearning-platform/advanced-features/skill?csssr-images',
    ),
    heading: 'Configure learning programs based on skills',
    description:
      'Our skill-based system could help users to choose or configure the learning program based on skills they want to get or improve. As they make progress the system constantly monitors the way they improve and, taking into account multiple parameters from passed assessments to time and attempts made, indicates how skills are improving.',
  },
  rating: {
    images: require.context(
      '../../public/images/solutions/elearning-platform/advanced-features/rating?csssr-images',
    ),
    heading: 'Choose a learning program and see how your skills grow',
    description:
      'Most students want not just to complete tasks but to monitor their KPIs and find out how well they are doing as compared to the other ones. For that purpose we can develop a Rating System module. It could be a highly configurable system making your educational platform more competitive and more focused on individual advancement.',
  },
  ecosystem: {
    images: require.context(
      '../../public/images/solutions/elearning-platform/advanced-features/ecosystem?csssr-images',
    ),
    heading: 'Connect the LMS to your existing tools and systems',
    description:
      'Each business is unique so we’ve developed a platform that can be easily integrated with other products in your ecosystem. It could be anything from a communication hub, like Slack, to a learning platform to be integrated in your own product.',
  },
}

export const featureButtons = [
  {
    id: 'payment',
    images: require.context(
      '../../public/images/solutions/elearning-platform/advanced-buttons/payment?csssr-images',
    ),
    text: 'Payment Providers Integration',
    description: 'Add any payment provider you need',
    imageAlt: 'Add any payment provider you need',
  },
  {
    id: 'skill',
    images: require.context(
      '../../public/images/solutions/elearning-platform/advanced-buttons/skill?csssr-images',
    ),
    text: 'Skill-Based Learning System',
    description: 'Configure learning programms based on skills',
    imageAlt: 'Configure learning programms based on skills',
  },
  {
    id: 'rating',
    images: require.context(
      '../../public/images/solutions/elearning-platform/advanced-buttons/rating?csssr-images',
    ),
    text: 'Rating System',
    description: 'Choose the learning programm and see how skils grow',
    imageAlt: 'Choose the learning programm and see how skils grow',
  },
  {
    id: 'ecosystem',
    images: require.context(
      '../../public/images/solutions/elearning-platform/advanced-buttons/ecosystem?csssr-images',
    ),
    text: 'Ecosystem integration',
    description: 'Connect the LMS to your own and unique existing tools and systems',
    imageAlt: 'Connect the LMS to your own and unique existing tools and systems',
  },
]
