import { IconBrandGithub, IconHelp } from "@tabler/icons-react";
import logo from "../../favicon.svg";
import { Button } from "@mantine/core";
import { useState } from "react";
import { Container, Group } from "@mantine/core";
import classes from "./Hero.module.css";
import ColorSchemeToggle from "../ColorSchemeToggle/ColorSchemeToggle";

const hrefs = [
  {
    href: "https://github.com/ArchKudo/bed-bugh",
    label: "Github",
    icon: <IconBrandGithub />,
  },
  { href: "#faq", label: "FAQ", icon: <IconHelp /> },
];

export default function Hero() {
  const [active, setActive] = useState(hrefs[0].href);

  const items = hrefs.map((href) => (
    <a
      key={href.label}
      href={href.href}
      className={classes.href}
      data-active={active === href.href || undefined}
    >
      <Button
        leftSection={href.icon}
        variant="default"
        onClick={(event) => {
          event.preventDefault();
          setActive(href.href);
        }}
      >
        {href.label}
      </Button>
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <h1>
          🐞{" "}
          <a key="bed-bugh" href="#">
            बेड बघ
          </a>
        </h1>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <ColorSchemeToggle />
      </Container>
    </header>
  );
}
