import React from 'react'
import PrivacyPolicyPage from '../../components/privacy-policy/PrivacyPolicyPage'
import PrivacyPolicyContent from '../../components/privacy-policy/PrivacyPolicyContentRu'
import withI18next from '../../utils/withI18next'

const PrivacyPolicy = props => (
  <PrivacyPolicyPage {...props}>
    <PrivacyPolicyContent/>
  </PrivacyPolicyPage>
)

export default withI18next(['privacyPolicy'])(PrivacyPolicy)
