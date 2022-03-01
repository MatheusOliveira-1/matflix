import styled from "styled-components";
import Button from "../Button";

export const LogoImage = styled.img`
max-width: 300px;


@media(max-width: 800px) {
    max-width: 150px;
}
`;

export const MenuWrapper = styled.nav`
height: 94px;
width: 100%;

//position: fixed; 
left: 0;
top: 0;
padding-left: 5%;
padding-right: 5%;

align-items: center ;
display: flex;
justify-content: space-between;

background-color: var(--black);
border-bottom: 2px solid var(--primary);

@media (max-width: 800px){
    height: 40px;
    justify-content: center;
}
`;

export const ButtonLink = styled(Button)`
border: 1px solid var(--white);
border-radius: 30px;
color: var(--white);
font-size: 16px;
font-weight: bold;
padding: 16px 24px;
text-decoration: none;
transition: opacity .3s;
&:hover,
&:focus {
    opacity: .5;
}  

@media (max-width: 800px){
    background-color: var(--primary);
    bottom: 0;
    border-radius: 0;
    color: var(--white);
    left: 0;
    outline: 0;
    position: fixed;
    right: 0;
    text-align: center;


}
`; 