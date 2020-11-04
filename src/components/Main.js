import React from 'react'
import styled from 'styled-components'

const Main = () => {
    return (
        <Container>
            <Display>
            </Display>
        </Container>
    )
}

const Container = styled.div `
    height: 100%;
    width: 100%;
`;

const Display = styled.div `
    width: 544px;
`

export default Main
