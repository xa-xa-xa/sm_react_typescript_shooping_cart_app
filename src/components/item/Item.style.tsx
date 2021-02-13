import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
border-radius: 10px;
height: 100%;
background-color: white;
overflow: hidden;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12);
}
button {
    padding: 1rem 0;
    font-weight: 600;
    color: #3f51b5;
}
img {
    max-height: 250px;
    margin: 1.5rem;
    object-fit: scale-down;
    border-radius: 10px 10px 0 0;
}

div {
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
}
p {
    overflow-wrap: break-word;
}
h3 {
    text-align: center;
}

h4 {
    text-align: center;
    color: #3f51b5;
}

`