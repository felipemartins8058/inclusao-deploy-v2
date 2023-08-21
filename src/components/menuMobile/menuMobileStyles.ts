'use client'
import { styled } from 'styled-components'

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.25rem 0;
    
    @media(min-width: 769px) {
        display: none;
    }

`

export const DivMobile = styled.div`
    background-color: ${(props) => props.theme.color_background_light};

    width: 20rem;
    height: 80rem;
    position: fixed;
    top: 0;
    right: 0;
    animation: showSidebar .4s;
    z-index: 1;

    @keyframes showSidebar {
        from {
          opacity: 0;
          width: 0;
        }
        to {
          opacity: 1;
          width: 20rem;
          
        }
      }

    @media(min-width: 1025px) {
        &.menu{
            display: none;
        }
    }
    &.menu{
        display: none;
    }

    
    &.open {
        display: block;

        @media(min-width: 1025px) {
            display: none;
        }
    }

    @media(max-width: 1024px) {
            display: block;
  
    }
    @media(max-width: 768px) and (min-width: 480px) {
        width: 16rem;

        @keyframes showSidebar {
            from {
              opacity: 0;
              width: 0;
            }
            to {
              opacity: 1;
              width: 16rem;
              
            }
          }

    }

    @media(max-width: 480px)  {
        width: calc(20rem + ((100vw - 320px) / 160) * 10);

        @keyframes showSidebar {
            from {
              opacity: 0;
              width: 0;
            }
            to {
              opacity: 1;
              width: calc(20rem + ((100vw - 320px) / 160) * 10);
              
            }
          }

    }

    @media(max-width: 320px)  {
        width: width: calc(10rem + ((100vw - 160px) / 160) * 10);

        @keyframes showSidebar {
            from {
              opacity: 0;
              width: 0;
            }
            to {
              opacity: 1;
              width: width: calc(10rem + ((100vw - 160px) / 160) * 10);
              
            }
          }

    }
    
`

export const ButtonToggle = styled.button`
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
    z-index: 1;
    border: solid 0.5px;
    border-radius: 5px;
    border-color: #E9ECEF;

    &.open {
        position: fixed;
        right: 2rem;
        top: 5rem;
    }

    @media(min-width: 1025px) {
        display: none;

}
`

export const LinksMenuMobile = styled.ul`
list-style: none;
padding: 0;
margin-top: 12rem;
display: flex;
align-items: center;
gap: 1rem;

@media(max-width: 1024px) {
    flex-direction: column;
}
`

export const ItemsMenuMobile = styled.li`
margin-right: 4rem;

@media(max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 10px;
}
`

export const ItemsMenuLink = styled.a`
    color: black;
    text-decoration: none;
    color: ${(props) => (props.color ? `${props.color}` : props.theme.color_h1)};

    &:hover{
        cursor:pointer;
        text-decoration: underline;
    }
`

export const SobreposicaoDiv = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    &.open {
        display: block;

        @media (min-width: 769px) {
            display: none;
        }
    }
`


