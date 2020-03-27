import React from 'react'
import PrivacyPolicyPage from '../../components/privacy-policy/PrivacyPolicyPage'
import PrivacyPolicyContent from '../../components/privacy-policy/PrivacyPolicyContentRu'
import translate from '../../utils/translate-wrapper'

const PrivacyPolicy = (props) => (
  <PrivacyPolicyPage {...props}>
    <PrivacyPolicyContent />
  </PrivacyPolicyPage>
)

export default translate(PrivacyPolicy)
