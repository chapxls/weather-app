import React from 'react'
import styled from 'styled-components'
import sun from '../assets/sun.png'

const Sidebar = () => {
    return (
        <Container>
            <h1>Sidebar</h1>
            <Image src={sun}></Image>
        </Container>
    )
}

const Container = styled.div `
    min-width: 40%;
    height: 100%;
    background: #f1f8ff;
`

const Image = styled.img `
    width: 144px;
    height: 144px;
`

export default Sidebar
