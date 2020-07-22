export default (inquiryTypeId, activeAddressId) =>
  inquiryTypeId === 'new-project'
    ? {
        sg: 'anastasia_ignatenko',
        ee: 'anastasia_vnuchenko',
        ru: 'olga_shevchenko',
      }[activeAddressId]
    : 'victoria_zubareva'
