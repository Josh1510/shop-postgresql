import React, { useState } from 'react';
import ShopPage from '../store/ShopPage';
import Cart from '../store/cart/Cart';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Banner from './Banner';
import CartModal from '../store/cart/CartModal';

export default function Home() {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  return (
    <HomeContainer>
      {cartModalOpen && (
        <div>
          <CartModal modal={true} setCartModalOpen={setCartModalOpen} />
        </div>
      )}
      <Router>
        <StyledNav>
          <StyledUL>
            <HomeBtnContainer>
              <StyledLi>
                <StyledLink to="/">CPU COMPUTERS</StyledLink>
              </StyledLi>
            </HomeBtnContainer>

            <NavBtnContainer>
              <StyledLi>
                <StyledLink to="/shop">SHOP</StyledLink>
              </StyledLi>
              <StyledLi>
                {/* If user has naviated to cart page prevents modal opening */}
                {window.location.pathname === '/cart' ? (
                  <StyledLink to={window.location.pathname}>CART</StyledLink>
                ) : (
                  <StyledLink
                    onClick={() => setCartModalOpen(true)}
                    to={window.location.pathname}
                  >
                    CART
                  </StyledLink>
                )}
              </StyledLi>
            </NavBtnContainer>
          </StyledUL>
        </StyledNav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/cart" component={Cart}>
            <Cart />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/">
            <Banner />
          </Route>
        </Switch>
      </Router>
    </HomeContainer>
  );
}

const StyledLink = styled(Link)`
  &:link {
    text-decoration: none;
  }

  &:focus {
    text-decoration: underline;
    color: red;
  }

  &:hover {
    text-decoration: underline;
    color: red;
  }

  &:visited {
    text-decoration: none;
  }

  &:active {
    text-decoration: underline;
    color: red;
  }
`;

const StyledNav = styled.nav`
  height: 15vh;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

const StyledUL = styled.ul`
  font-weight: 500;
  font-size: xx-large;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 20px 80px;
  text-decoration: none;
`;

const StyledLi = styled.li`
  padding: 0px 40px;
  text-decoration: none;
`;

const HomeBtnContainer = styled.div``;

const NavBtnContainer = styled.div`
  display: flex;
`;
