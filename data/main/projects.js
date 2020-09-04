const trackerImages = require.context('../../public/images/main/projects/tracker?csssr-images')
const trackerImagesHovered = require.context(
  '../../public/images/main/projects/tracker-hovered?csssr-images',
)
const schoolImages = require.context('../../public/images/main/projects/school?csssr-images')
const schoolImagesHovered = require.context(
  '../../public/images/main/projects/school-hovered?csssr-images',
)
const radioImages = require.context('../../public/images/main/projects/radio?csssr-images')
const blogImages = require.context('../../public/images/main/projects/blog?csssr-images')
const blogImagesHovered = require.context(
  '../../public/images/main/projects/blog-hovered?csssr-images',
)

export default [
  {
    id: 'tracker',
    title: (t) => t.main.projects.tracker.title,
    description: (t) => t.main.projects.tracker.description,
    href: 'https://tracker.csssr.com/',
    images: trackerImages,
    imagesHovered: trackerImagesHovered,
  },
  {
    id: 'school',
    title: (t) => t.main.projects.school.title,
    description: (t) => t.main.projects.school.description,
    href: 'https://school.csssr.com',
    images: schoolImages,
    imagesHovered: schoolImagesHovered,
  },
  {
    id: 'blog',
    title: (t) => t.main.projects.blog.title,
    description: (t) => t.main.projects.blog.description,
    href: 'https://blog.csssr.com',
    images: blogImages,
    imagesHovered: blogImagesHovered,
  },
  {
    id: 'radio',
    title: (t) => t.main.projects.radio.title,
    description: (t) => t.main.projects.radio.description,
    href: 'https://soundcloud.com/csssr',
    images: radioImages,
  },
]
