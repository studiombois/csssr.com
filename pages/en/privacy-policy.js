import React from 'react'
import PrivacyPolicyPage from '../../components/privacy-policy/PrivacyPolicyPage'
import PrivacyPolicyContent from '../../components/privacy-policy/PrivacyPolicyContentEn'
import { L10nConsumer } from '../../utils/l10nProvider'

const PrivacyPolicy = (props) => (
  <PrivacyPolicyPage {...props}>
    <PrivacyPolicyContent />
  </PrivacyPolicyPage>
)

export default L10nConsumer(PrivacyPolicy)
