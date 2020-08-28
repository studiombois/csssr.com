const factsImages = require.context('../../public/images/industry/common-pics/facts?csssr-images')

export default {
  heading: (t) => t.industry.facts.heading,
  subHeading: (t) => t.industry.facts.subHeading,
  images: factsImages,
  imgAlt: (t) => t.industry.imgAlt.facts,
  factItems: [
    {
      number: (t) => t.industry.facts.firstItem.number,
      text: (t) => t.industry.facts.firstItem.text,
      className: 'first-item',
    },
    {
      number: (t) => t.industry.facts.secondItem.number,
      text: (t) => t.industry.facts.secondItem.text,
      className: 'second-item',
    },
    {
      number: (t) => t.industry.facts.thirdItem.number,
      text: (t) => t.industry.facts.thirdItem.text,
      className: 'third-item',
    },
    {
      number: (t) => t.industry.facts.fourthItem.number,
      text: (t) => t.industry.facts.fourthItem.text,
      className: 'fourth-item',
    },
  ],
}
