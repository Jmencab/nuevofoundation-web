import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NuevoFoundationLogo from "../../../assets/logos/Logo_long.svg";
import { Const } from "../../../Const";
import { ButtonCta } from "./ButtonCta";
import { NavItems } from "./NavItems";

// TODO: replace this with flex later
const HeaderWrapper = styled.div`
  height: 72px;
  font-family: "Lato", sans-serif;
  font-size: 16px;
`;

const NavLogo = styled.img`
  float: left;
`;

const NavList = styled.ul`
  float: left;
  text-align: center;
  padding-top: 20px;
`;
const NavItem = styled.li`
  display: inline-block;
  font-size: 20px;
  padding-right: 50px;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fcc600;
    transition: width 0.3s;
  }

  &:hover {
    color: #000000;
  }

  &:hover::after {
    width: 100%;
  }
`;

const SmallNavItem = styled.li`
  font-size: 18px;
  padding-bottom: 15px;
  cursor: pointer;
`;

const NavIcon = styled.span`
  padding-left: 10px;
`;

const ButtonWrapper = styled.div`
  float: right;
  padding: 10px 20px 0 0;
`;

const StyledNavLink = styled(NavLink)`
  color: #535353;
  font-weight: bold;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

interface INavItem {
  dropdown: boolean;
  text: string;
  link: string;
}

interface IHeaderProps {
  hamburgerMenuOpen: boolean;
  handleHamburgerIconClick: () => void;
}

// TODO: Implement selected nav item styling
export class Header extends React.Component<IHeaderProps> {
  public renderNavItems(): JSX.Element[] {
    return NavItems.map((navItem: INavItem, index: number) => {
      return (
        <StyledNavLink key={index} to={navItem.link}>
          <NavItem>
            {navItem.text}
            {navItem.dropdown && (
              <NavIcon>
                <FontAwesomeIcon icon={faChevronDown} className={"fa-sm"} />
              </NavIcon>
            )}
          </NavItem>
        </StyledNavLink>
      );
    });
  }

  public renderSmallNavItems(): JSX.Element[] {
    return NavItems.map((navItem: INavItem, index: number) => {
      return (
        <Row key={index}>
          <Col xs={4} xsOffset={4} smHidden={true} mdHidden={true} lgHidden={true}>
            <StyledNavLink to={navItem.link}>
              <SmallNavItem>
                {navItem.text}
                {navItem.dropdown && (
                  <NavIcon>
                    <FontAwesomeIcon icon={faChevronDown} className={"fa-sm"} />
                  </NavIcon>
                )}
              </SmallNavItem>
            </StyledNavLink>
          </Col>
        </Row>
      );
    });
  }

  public render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col sm={12} xsHidden={true}>
            <HeaderWrapper>
              <StyledNavLink to={"/"}>
                <NavLogo src={NuevoFoundationLogo} height={"60px"} />
              </StyledNavLink>
              <NavList> {this.renderNavItems()} </NavList>
              <ButtonWrapper>
                <ButtonCta
                  text={"DONATE"}
                  backgroundColor={"#FFFFFF"}
                  textColor={"#000000"}
                  border={"4px solid #fcca13"}
                  linkTo={Const.PayPalDonatePage!}
                />
              </ButtonWrapper>
            </HeaderWrapper>
          </Col>

          <Col xs={12} smHidden={true} mdHidden={true} lgHidden={true}>
            <Row>
              <Col xs={10}>
                <StyledNavLink to={"/"}>
                  <NavLogo src={NuevoFoundationLogo} height={"60%"} />
                </StyledNavLink>
              </Col>
              <Col
                onClick={this.props.handleHamburgerIconClick}
                xs={2}
                style={{
                  paddingTop: "4%",
                  paddingLeft: "4%",
                  cursor: "pointer"
                }}
              >
                <FontAwesomeIcon icon={faBars} className={"fa-lg"} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
