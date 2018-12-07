#!/usr/bin/env node
// usage: https://www.npmjs.com/package/responsive-images-generator

const responsiveImages = require('responsive-images-generator/lib')
const path = require('path')

const generateResponsiveImages = responsiveImages.generateResponsiveImages

const configs = [
  { width: '33.3333333%', rename: { suffix: '@1x' } },
  { width: '66.6666666%', rename: { suffix: '@2x' } },
  { width: '100%', rename: { suffix: '@3x' } },
]

const imageDir = '/static/images/school'
const images = [
  path.join(__dirname + imageDir, 'cover.png'),
  path.join(__dirname + imageDir, 'cup1.png'),
  path.join(__dirname + imageDir, 'stat.png'),
  path.join(__dirname + imageDir, 'cup2.png'),
  path.join(__dirname + imageDir, 'cup3.png'),
  path.join(__dirname + imageDir, 'cup4.png'),
  path.join(__dirname + imageDir, 'cup5.png'),
  path.join(__dirname + imageDir, 'React_course_middle.png'),
  path.join(__dirname + imageDir, 'React_course_advanced.png'),
  path.join(__dirname + imageDir, 'React_course_junior.png'),
  path.join(__dirname + imageDir, 'Bonus_school_slack.png'),
  path.join(__dirname + imageDir, 'Bonus_school_CV.png'),
  path.join(__dirname + imageDir, 'Bonus_school_path.png'),
]

generateResponsiveImages(images, configs)
