import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Box } from 'components/Box';
import styled from 'styled-components';
import { ColorRing } from 'react-loader-spinner';
export const SharedLayout = () => {
  return (
    <Box>
      <Box as="header" borderBottom="2px solid orange">
        <Box as="nav" display="flex" gridGap={15}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="movies">Movies</NavItem>
        </Box>
      </Box>
      <Suspense
        fallback={
          <div>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
};
// styleApp
const NavItem = styled(NavLink)`
  color: black;
  font-size: 28px;
  padding: 20px 0;

  &.active {
    color: orange;
  }

  :hover:not(.active) {
    color: deeppink;
  }
`;
