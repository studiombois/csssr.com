import styled from '@emotion/styled'
import { Heading as HeadingOrigin } from '@csssr/core-design'

const StyledHeading = styled(HeadingOrigin)`
    color: #18191B;
`

const OriginHeadings = {
    H1: StyledHeading.withComponent('h1'),
    H2: StyledHeading.withComponent('h2'),
    H3: StyledHeading.withComponent('h3'),
    H4: StyledHeading.withComponent('h4'),
    H5: StyledHeading.withComponent('h5'),
    H6: StyledHeading.withComponent('h6'),
}

const Heading = Object.assign(
    StyledHeading,
    OriginHeadings
)


export default Heading;