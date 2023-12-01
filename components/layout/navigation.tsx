import * as React from "react";
import { HStack, Button } from "@chakra-ui/react";

import { useRouter } from "next/router";

import siteConfig from "data/config";

import { NavLink } from "components/nav-link";

import { useScrollSpy } from "hooks/use-scrollspy";

import { MobileNavButton } from "components/mobile-nav";
import { MobileNavContent } from "components/mobile-nav";
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";

import ThemeToggle from "./theme-toggle";
import { useAuth } from "context/AuthContext";

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure();
  const router = useRouter();
  const { user, logout } = useAuth()


  // const activeId = useScrollSpy(
  //   siteConfig.header.links
  //     .filter(({ id }) => id)
  //     .map(({ id }) => `[id="${id}"]`),
  //   {
  //     threshold: 0.75,
  //   }
  // );

  // const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  // useUpdateEffect(() => {
  //   mobileNavBtnRef.current?.focus();
  // }, [mobileNav.isOpen]);

  return (
    <HStack spacing="2" flexShrink={0}>
      {/* {siteConfig.header.links.map(({ href, id, ...props }, i) => {
        return (
          <NavLink
            display={["none", null, "block"]}
            href={href || `/#${id}`}
            key={i}
            isActive={
              !!(
                (id && activeId === id) ||
                (href && !!router.asPath.match(new RegExp(href)))
              )
            }
            {...props}
          >
            {props.label}
          </NavLink>
        );
      })} */}

      {
        user?.accessToken != null
          ? <Button
            display={["none", null, "block"]}
            onClick={logout}
            variant={'primary'}
          >
            Logout
          </Button>
          : <NavLink
            display={["none", null, "block"]}
            href={'/signup'}
            variant={'primary'}
          >
            Log In / Sign Up
          </NavLink>
      }

      {/* <ThemeToggle /> */}

      {/* <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      /> */}

      {/* <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} /> */}
    </HStack>
  );
};

export default Navigation;
