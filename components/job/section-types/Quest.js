import React, { Fragment } from 'react'
import { array, string } from 'prop-types'
import FormRow from '../FormRow'
import Section from '../Section'
import { getMsColumn } from '../../../utils/style/getGridValueForMs'

const renderFileInfo = (fileSize, fileExt, fileName, fileLink) => (
  <Fragment>
    <div className="icon-wrapper">
      <img
        src={require(`../../../static/icons/${fileExt.toLowerCase()}.svg`)}
        alt={`${fileExt} file extension logo`}
      />
    </div>

    <div className="file-info">
      <a className="font_link-list_16" href={fileLink} target="_blank" rel="noopener">
        {fileName}
      </a>
      <span className="font_perforator-10-regular" dangerouslySetInnerHTML={{ __html: fileSize }} />
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

      @media (max-width: 767px) {
        .icon-wrapper {
          margin-top: 1.5rem;
          grid-column: 1 / span 1;
          height: auto;
        }

        .file-info {
          margin-top: 2rem;
          grid-column: 2 / span 5;
        }

        span {
          margin-top: 0.875rem;
          font-weight: bold;
        }
      }
    `}</style>

    <style jsx>{`
      :global(.ie11) .icon-wrapper {
        -ms-grid-column: ${getMsColumn(10)};
        -ms-grid-column-span: ${getMsColumn(1)};
      }

      :global(.ie11) .file-info {
        -ms-grid-column: ${getMsColumn(11)};
        -ms-grid-column-span: ${getMsColumn(1)};
      }
    `}</style>
  </Fragment>
)

const Quest = ({ fileSize, fileExt, fileName, fileLink, text, title, sections }) => (
  <Fragment>
    <FormRow rightSideContent={renderFileInfo(fileSize, fileExt, fileName, fileLink)}>
      <h2 className="font_h2-regular" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="font_p16-regular" dangerouslySetInnerHTML={{ __html: text }} />
    </FormRow>

    {sections.map((section, index) => (
      <Section key={index} {...section} asRow isChild />
    ))}
    <style jsx>{`
      h2 {
        margin-top: 6.0625rem;
      }

      p {
        margin-top: 0.5rem;
      }

      @media (max-width: 767px) {
        h2 {
          margin-top: 3.875rem;
        }

        p {
          padding-bottom: 0;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }
      }
    `}</style>
  </Fragment>
)

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
