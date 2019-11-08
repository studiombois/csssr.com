import React, { PureComponent } from 'react'
import cn from 'classnames'
import { string, number, bool, func } from 'prop-types'


export default class SelectField extends PureComponent {
  static propTypes = {
    id: string,
    name: string,
    value: string,
    tabIndex: number,
    className: string,
    disabled: bool,
    onChange: func,
  }

  static defaultProps = {
    tabIndex: 0,
  }

  handleChange = data => {
    this.props.input.onChange(data)
  }


  render() {
    const {
      id,
      input,
      disabled,
      className,
      placeholder,
      options,
    } = this.props

    return (
      <div
        className={cn({
          [className]: !!className,
          select_filled: input.value,
        })}
      >
        <select
          id={id}
          name={input.name}
          className='font_input-small-label'
          value={input.value}
          disabled={disabled}
          onChange={this.handleChange}
        >
          <option hidden>{placeholder}</option>
          {options.map(option =>
            <option key={option.id} value={option.id}>
              {option.checkboxText}
            </option>
          )}
        </select>

        <label
          className={'font_input-small-label'}
          dangerouslySetInnerHTML={{ __html: placeholder }}
          htmlFor={id}
        />

        <style jsx>{`
          div {
            position: relative;
            display: block;
          }

          select {
            appearance: none;
            padding-left: 1rem;
            box-sizing: border-box;
            display: block;
            width: 100%;
            height: 4rem;
            line-height: 1rem;
            font-size: 0.875rem;
            color: #9b9b9b;
            border: 1px solid #e1e1e1;
            border-radius: 0;
            background: none;
          }

          label {
            position: absolute;
            overflow: hidden;
            width: 0;
            height: 0;
            opacity: 0;
          }

          :not(.select_filled) select:focus {
            color: transparent;
          }

          .select_filled select {
            padding-top: 1rem;
            font-size: 1.5rem;
            font-weight: 100;
            font-style: normal;
            font-stretch: normal;
            line-height: 2rem;
            letter-spacing: normal;
            text-transform: none;
            color: #c0c0c0;
          }

          select:focus + label,
          .select_filled label {
            position: absolute;
            top: 0.375rem;
            left: 1rem;
            display: block;
            width: calc(100% - 2rem);
            height: auto;
            font-size: 0.625rem;
            color: #0076ff;
            opacity: 1;
            pointer-events: none;
            user-select: none;
          }
        `}</style>
      </div>
    )
  }
}
