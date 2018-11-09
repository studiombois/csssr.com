import React, { Fragment } from 'react'
import { array, string } from 'prop-types'
import FormRow from '../FormRow'
import Section from '../Section'

const renderFileInfo = (fileSize, fileExt, fileName, fileLink) =>
  <Fragment>
    <div className='icon-wrapper'>
      <img
        src={`/static/icons/${fileExt.toLowerCase()}.svg`}
        alt={`${fileExt} file extension logo`}
      />
    </div>

    <div className='file-info'>
      <a
        className='font_link-list_16'
        href={fileLink}
        target='_blank'
        rel='noopener'
      >
        {fileName}
      </a>
      <span className='font_perforator-10-regular' dangerouslySetInnerHTML={{ __html: fileSize }} />
    </div>


    <style jsx>{`
      .icon-wrapper {
        margin-top: 8.5rem;
        grid-column: 10 / span 1;
        text-align: center;
        height: 0;
      }

      .file-info {
        margin-top: 9rem;
        grid-column: 11 / span 1;
        height: 0;
      }

      span {
        margin-top: 0.375rem;
        display block;
      }

      img {
        max-width: 100%;
      }
    `}</style>
  </Fragment>

const Quest = ({ fileSize, fileExt, fileName, fileLink, text, title, sections }) =>
  <Fragment>
    <FormRow
      rightSideContent={renderFileInfo(fileSize, fileExt, fileName, fileLink)}
      customStylesForRightSideContent
    >
      <h2 className='font_h2-regular' dangerouslySetInnerHTML={{ __html: title }} />
      <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: text }} />
    </FormRow>

    {sections.map((section, index) => <Section key={index} {...section} asRow />)}
    <style jsx>{`
      h2 {
        margin-top: 6.0625rem;
      }

      p {
        margin-top: 0.5rem;
      }
    `}</style>
  </Fragment>

Quest.propTypes = {
  fileSize: string,
  fileExt: string,
  fileName: string,
  fileLink: string,
  text: string,
  title: string,
  sections: array,
}

export default Quest
