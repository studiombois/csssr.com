export const getMsColumn = col => col * 2 - 1

export const getMsStyle = (col, span, row) => {
  return `
    -ms-grid-column: ${col * 2 - 1};
    -ms-grid-column-span: ${span * 2 - 1};
    ${row === undefined ? '' : `-ms-grid-row: ${row};`}
  `
}
