import style from 'styled-components';

const Main = style.div`
  background: #222831;
  color: #F9F6EE;
  width: 100vw;
  hight: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 15vh 8vh 70vh 7vh;
  grid-template-areas:
    ". banner ."
    "search search search"
    "main main main"
    "foot foot foot";
`;
export default Main;

export const BannerSt = style.div` 
  grid-area: banner;
  background: #121212;
  border-radius: 25px;
  width: 100%;
  margin: 0.5rem 0 0 1rem;
  text-align: center;
`;

export const SearchSt = style.div`
  grid-area: search;
  text-align: center;
  margin: 1rem 0 0 0;
`;

export const All = style.div` 
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "sideList mapResult mapResult"
`;

export const SideListSt = style.div` 
  grid-area: sideList;
  margin: 0 0 0 1rem;
  text-align: center;
`;

export const MapResultSt = style.div` 
  grid-area: mapResult;
} 
`;

export const Footer = style.div` 
  grid-area: foot;
  text-align: center;
  padding-top: 1.5rem;
`;

export const Link = style.a`
  text-decoration: none;
  color: #F9F6EE;
`;
