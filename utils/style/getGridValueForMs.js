export const getMsColumn = col => col * 2 - 1

export const getMsStyle = (col, span) => {
  return `
    -ms-grid-column: ${col * 2 - 1};
    -ms-grid-column-span: ${span * 2 - 1};
  `
}
