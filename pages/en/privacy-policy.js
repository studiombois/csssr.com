import React from 'react'
import PrivacyPolicyPage from '../../components/privacy-policy/PrivacyPolicyPage'
import PrivacyPolicyContent from '../../components/privacy-policy/PrivacyPolicyContentEn'
import translate from '../../utils/translate-wrapper'

const PrivacyPolicy = (props) => (
  <PrivacyPolicyPage {...props}>
    <PrivacyPolicyContent />
  </PrivacyPolicyPage>
)

export default translate(PrivacyPolicy)
