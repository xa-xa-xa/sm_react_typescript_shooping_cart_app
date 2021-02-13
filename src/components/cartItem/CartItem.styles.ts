import styled from 'styled-components'

export const Wrapper = styled.div`
font-family: Arial, Helvetica, sans-serif;
display: flex;
justify-content: space-between;
align-items: flex-end;
margin-bottom: 3rem;
div {
    display: flex;
}

.container {
    width: 100%;
    flex-direction: column;

}
.info-container {
    justify-content: space-between;
    .info {
        width: 65%;
        align-self: flex-end;
        margin-right: 1rem;
        p {
            font-size: .8rem;
        }
    }
    .image {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        img {
            max-width: 100%;
            height: 100px;
        }
    }
 }

.information, .buttons {
    justify-content: space-between;
}

` 