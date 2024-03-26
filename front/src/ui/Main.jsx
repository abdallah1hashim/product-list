import styled from "styled-components"

function Main({children}){
    const StyledMain = styled.main`
        padding: 60px 0;
    `

    return (
        <StyledMain>
            {children}
        </StyledMain>
    )
}

export default Main
