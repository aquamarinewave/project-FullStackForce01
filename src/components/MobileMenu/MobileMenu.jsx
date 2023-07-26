// import { createPortal } from 'react-dom';
// import { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Test, CloseButton, ButtonText, TopMenu, Menu, IconCross, IconLogout, LoginButton, IconPawPrint, RegisterButton, Container, ButtonContainer } from './MobileMenu.styled';
// import Logo from '../Logo/Logo';
// import Nav from '../Nav/Nav';
// // import Logout from 'components/Logout/Logout.styled';
// import sprite from '../../images/icons.svg';

// const MobileMenu = ({ openMenu, toggleMenu }) => {
//   const [isTablet, setIsTablet] = useState((window.innerWidth < 768) && (window.innerWidth < 1280));
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsTablet((window.innerWidth > 769) && (window.innerWidth < 1280));
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return createPortal(
//     <Test isOpen={openMenu}>
//       <TopMenu>
//         <div>
//           <Logo />
//         </div>
//         {/* <div> */}
//           {/* {!isAuth ? ( */}
//           {/* {children} */}
//           {/* <Logout type="button">
//             <ButtonText color="logout" weight="bold" margin="8px">
//               Logout
//             </ButtonText>
//             <IconLogout width={24} height={24}>
//               <use href={`${sprite}#icon-logout`}></use>
//             </IconLogout>
//           </Logout> */}
//           {/* ) : ( */}
//           {/* <ButtonContainer> */}
//             <Container>
//               <NavLink to="/login" onClick={() => toggleMenu()}>
//                 <LoginButton isMobile={true} type="button">
//                   <ButtonText color="login" margin="8px" weight="bold">
//                     Log IN
//                   </ButtonText>
//                   <IconPawPrint width={24} height={24}>
//                     <use href={`${sprite}#icon-pawprint-1`}></use>
//                   </IconPawPrint>
//                 </LoginButton>
//               </NavLink>
//               <NavLink to="/register" onClick={() => toggleMenu()}>
//                 <RegisterButton type="button" isMobile={true}>
//                   <ButtonText color="register" weight="semi-bold">
//                     Registration
//                   </ButtonText>
//                 </RegisterButton>
//               </NavLink>
//             </Container>
//             {/* )} */}
//             <CloseButton type="button" onClick={() => toggleMenu()}>
//               <IconCross width={24} height={24}>
//                 <use href={`${sprite}#icon-cross`}></use>
//               </IconCross>
//             </CloseButton>
//           {/* </ButtonContainer> */}
//         {/* </div> */}
//       </TopMenu>
//       <Nav isMobile={true} />
//       {/* </div> */}
//     </Test>,
//     document.querySelector('#portal-root')
//   );
// };

// export default MobileMenu;
