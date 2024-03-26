import styled from "styled-components"

function Delete(){
    const Div = styled.div`
        position: absolute;
        top: 10px;
        left: 10px;
    `
    return (
        <Div>
            <input type="checkbox" />
        </Div>
    )
}

export default Delete
