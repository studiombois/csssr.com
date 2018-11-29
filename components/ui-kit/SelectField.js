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
          value={input.value}
          disabled={disabled}
          onChange={this.handleChange}
        >
          <option label=' ' />
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
            padding-left: 0.875rem;
            padding-top: 1rem;
            box-sizing: border-box;
            display: block;
            width: 100%;
            height: 4rem;
            font-family: Roboto;
            font-size: 1.5rem;
            font-weight: 100;
            font-style: normal;
            font-stretch: normal;
            line-height: 2rem;
            letter-spacing: normal;
            color: #c0c0c0;
            border: 1px solid #e1e1e1;
            border-radius: 0;
            background: none;
          }

          label {
            position: absolute;
            margin: auto;
            top: 1.4375rem;
            left: 1rem;
            display: block;
            height: 1rem;
            width: calc(100% - 2rem);
            line-height: 1rem;
            font-size: 0.875rem;
            color: #9b9b9b;
            pointer-events: none;
            user-select: none;
          }

          select:focus + label,
          .select_filled label {
            top: 0.375rem;
            font-size: 0.625rem;
            color: #0076ff;
          }
        `}</style>
      </div>
    )
  }
}
