import style from 'styled-components';

const Main = style.div`
  background: #222831;
  color: #F9F6EE;
  width: 100vw;
  hight: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 15vh 10vh 65vh 10vh;
  grid-template-areas:
    "banner banner banner"
    "search search search"
    "main main main"
    "foot foot foot";
`;
export default Main;

export const BannerSt = style.div` 
  grid-area: banner;
  background: #121212;
`;

export const SearchSt = style.div`
  grid-area: search;
  background: #121212;
`;

export const All = style.div` 
  grid-area: main;
  background: blue;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "sideList mapResult mapResult"
`;

export const SideListSt = style.div` 
  grid-area: sideList;
  background: green;
`;

export const MapResultSt = style.div` 
  grid-area: mapResult;
} 
`;

export const Footer = style.div` 
  grid-area: foot;
`;
