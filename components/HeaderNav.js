import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

const HeaderNav = () => {
  const router = useRouter();

  return (
    <HeaderNavWrapper>
      <Link href={"/"}>
        <HeaderNavLinks active={router.pathname == "/" ? true : false}>
          Dashboards
        </HeaderNavLinks>
      </Link>
      <Link href={"myCampaign"}>
        <HeaderNavLinks
          active={router.pathname == "/myCampaign" ? true : false}
        >
          My Campaign
        </HeaderNavLinks>
      </Link>
      <Link href={"createCampaign"}>
        <HeaderNavLinks
          active={router.pathname == "/createCampaign" ? true : false}
        >
          Create Campaign
        </HeaderNavLinks>
      </Link>
    </HeaderNavWrapper>
  );
};

const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 6px;
  height: 50%;
  border-radius: 10px;
`;

const HeaderNavLinks = styled.div`
  font-family: "roboto";
  margin: 5px;
  height: 100%;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? props.theme.bgSubDiv : props.theme.bgDiv};
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 0px 4px 0px 4px;
  text-transform: uppercase;
  font-weight: 600;
`;

export default HeaderNav;
