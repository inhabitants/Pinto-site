"use client";

import React, { useState } from "react";

import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  Input,
  Avatar,
  AvatarGroup,
  Textarea,
  PasswordInput,
  SegmentedControl,
  SmartLink,
  Dialog,
  Feedback,
  SmartImage,
  Line,
  LogoCloud,
  Background,
  Select,
  useToast,
  Card,
  Fade,
  StatusIndicator,
  DateRangePicker,
  DateRange,
  TiltFx,
  HoloFx,
  IconButton,
  TagInput,
  Switch,
  Column,
  Row,
  StyleOverlay,
} from "@/once-ui/components";
import { CodeBlock, MediaUpload } from "@/once-ui/modules";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const [firstDialogHeight, setFirstDialogHeight] = useState<number>();
  const { addToast } = useToast();
  const [intro, setIntro] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState<string[]>(["UX / UI", "Design systems", "AI / ML"]);
  const [twoFA, setTwoFA] = useState(false);

  const handleSelect = (value: string) => {
    console.log("Selected option:", value);
    setSelectedValue(value);
  };

  const links = [
    {
      href: "https://once-ui.com/docs/theming",
      title: "Themes",
      description: "Style your app in minutes",
    },
    {
      href: "https://once-ui.com/docs/RowComponent",
      title: "Layout",
      description: "Build responsive layouts",
    },
    {
      href: "https://once-ui.com/docs/typography",
      title: "Typography",
      description: "Scale text automatically",
    },
  ];

  const validateIntro = (value: React.ReactNode) => {
    if (typeof value === "string" && value.length < 10) {
      return (
        <Row horizontal="center" marginBottom="12" gap="8">
          <Icon name="errorCircle" />
          Intro must be at least 10 characters long.
        </Row>
      );
    }
    return null;
  };

  const validateLogin = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Email and / or password is invalid.";
    }
    return null;
  };

  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "4",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
        <Row
          data-border="rounded"
          horizontal="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          <Logo size="m" icon={false} href="/" />
          <Row gap="12" hide="s">
            <Button
              href="/produtos"
              size="s"
              label="Produtos"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="/sobre"
              size="s"
              label="Sobre Nós"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="/contato"
              size="s"
              label="Contato"
              weight="default"
              variant="tertiary"
            />
            <StyleOverlay top="20" right="24" />
          </Row>
          <Row gap="16" show="s" horizontal="center" paddingRight="24">
            <IconButton
              href="https://discord.com/invite/5EyAQ4eNdS"
              icon="discord"
              variant="tertiary"
            />
            <IconButton
              href="https://github.com/once-ui-system/nextjs-starter"
              icon="github"
              variant="tertiary"
            />
            <StyleOverlay top="20" right="24" />
          </Row>
        </Row>
      </Row>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column fillWidth horizontal="center" gap="32" padding="32" position="relative">
            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
              Start by editing
              <Text onBackground="brand-medium" marginLeft="8">
                app/page.tsx
              </Text>
            </InlineCode>
            <Heading 
              wrap="balance" 
              variant="display-default-l" 
              align="center" 
              marginBottom="16"
            >
              Pinto Brasil: Excelência em Soluções Industriais
            </Heading>
            <Text 
              align="center" 
              onBackground="neutral-medium" 
              marginBottom="24"
            >
              Líder em equipamentos e soluções para indústria há mais de 30 anos
            </Text>
            <Button
              id="verProdutos"
              label="Ver Produtos"
              href="/produtos"
              variant="secondary"
              arrowIcon
            />
            <Column horizontal="center" paddingTop="64" fillWidth gap="24">
              <Line maxWidth={4} marginBottom="16" background="neutral-alpha-medium" />
              <AvatarGroup
                marginBottom="8"
                reverse
                size="s"
                avatars={[
                  {
                    src: "/images/l.jpg",
                  },
                  {
                    src: "/images/z.jpg",
                  },
                ]}
              />
              <Heading marginBottom="12" as="h2" align="center" variant="heading-default-l">
                Brought to you by indie creators
                <br /> behind stellar projects:
              </Heading>
              <LogoCloud
                paddingBottom="104"
                columns="3"
                mobileColumns="1"
                limit={3}
                fillWidth
                logos={[
                  {
                    icon: false,
                    wordmarkSrc: "/trademark/dopler-wordmark.svg",
                    href: "https://dropler.app",
                    size: "m",
                  },
                  {
                    icon: false,
                    wordmarkSrc: "/trademark/design-engineers-wordmark.svg",
                    href: "https://club.dropler.io",
                    size: "m",
                  },
                  {
                    icon: false,
                    wordmarkSrc: "/trademark/enroll-wordmark.svg",
                    href: "https://enroll.dopler.app",
                    size: "m",
                  },
                  {
                    icon: false,
                    wordmarkSrc: "/trademark/magic-portfolio-wordmark.svg",
                    href: "https://magic-portfolio.com",
                    size: "m",
                  },
                ]}
              />
            </Column>
          </Column>
          <Column fillWidth paddingX="32" gap="12" horizontal="center" position="relative">
            <Heading as="h2" variant="display-default-m">
              Produtos em Destaque
            </Heading>
            <Text marginBottom="32" align="center" onBackground="neutral-weak">
              Conheça nossas principais soluções industriais
            </Text>

            <Row 
              fillWidth 
              gap="32" 
              horizontal="center" 
              wrap={true}
            >
              <Card
                maxWidth="360px"
                padding="24"
                gap="16"
                direction="column"
              >
                <SmartImage 
                  src="/images/produto1.jpg" 
                  alt="Produto 1"
                  aspectRatio="16/9"
                  radius="m"
                />
                <Heading as="h3" variant="heading-default-m">
                  Equipamento Industrial
                </Heading>
                <Text onBackground="neutral-medium">
                  Descrição do equipamento e suas principais características
                </Text>
                <Button
                  variant="secondary"
                  label="Saiba mais"
                  arrowIcon
                />
              </Card>
            </Row>
          </Column>
          <Column
            fillWidth
            background="surface"
            padding="64"
            gap="32"
            horizontal="center"
          >
            <Heading as="h2" variant="display-default-m">
              Por que escolher a Pinto Brasil?
            </Heading>
            <Row 
              fillWidth 
              gap="32" 
              horizontal="center" 
              wrap={true}
            >
              <Column maxWidth="280px" gap="16" horizontal="center">
                <Icon name="shield" size="xl" />
                <Heading as="h3" variant="heading-default-s">
                  Qualidade Garantida
                </Heading>
                <Text align="center" onBackground="neutral-medium">
                  30 anos de experiência no mercado industrial
                </Text>
              </Column>
            </Row>
          </Column>
        </Column>

        <Row
          position="relative"
          fillWidth
          paddingX="32"
          paddingTop="160"
          minHeight={28}
          paddingBottom="80"
          horizontal="center"
          vertical="end"
        >
          <Background
            mask={{
              x: 50,
              y: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Row position="relative" textVariant="display-default-m" align="center">
            Learn more
          </Row>
        </Row>
        <Row fillWidth overflow="hidden">
          <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
          <Row fillWidth border="neutral-alpha-weak" mobileDirection="column">
            {links.map((link, index) => (
              <SmartLink unstyled fillWidth target="_blank" key={link.href} href={link.href}>
                <Card
                  fillWidth
                  padding="40"
                  gap="8"
                  direction="column"
                  background={undefined}
                  borderRight={index < links.length - 1 ? "neutral-alpha-weak" : undefined}
                  border={undefined}
                  radius={undefined}
                >
                  <Row fillWidth center gap="12">
                    <Text variant="body-strong-m" onBackground="neutral-strong">
                      {link.title}
                    </Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Row>
                  <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                    {link.description}
                  </Text>
                </Card>
              </SmartLink>
            ))}
          </Row>
          <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
        </Row>
        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="l"
          paddingY="64"
          background="surface"
          horizontal="center"
        >
          <Column
            maxWidth="l"
            fillWidth
            gap="32"
          >
            <Row 
              fillWidth 
              horizontal="space-between" 
              wrap={true}
              gap="32"
            >
              <Column maxWidth="320px" gap="16">
                <Logo size="m" />
                <Text onBackground="neutral-medium">
                  Pinto Brasil - Soluções industriais de qualidade desde 1990
                </Text>
              </Column>
              <Column gap="16">
                <Heading as="h4" variant="heading-default-xs">
                  Contato
                </Heading>
                <Text onBackground="neutral-medium">
                  Email: info@pintobrasil.com
                </Text>
                <Text onBackground="neutral-medium">
                  Tel: +351 123 456 789
                </Text>
              </Column>
            </Row>
            <Line background="neutral-alpha-medium" />
            <Text 
              size="s" 
              align="center" 
              onBackground="neutral-medium"
            >
              © 2024 Pinto Brasil. Todos os direitos reservados.
            </Text>
          </Column>
        </Row>
      </Column>

      <Dialog
        isOpen={isFirstDialogOpen}
        onClose={() => setIsFirstDialogOpen(false)}
        title="Account details"
        description="Manage your security settings and password."
        base={isSecondDialogOpen}
        onHeightChange={(height) => setFirstDialogHeight(height)}
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsFirstDialogOpen(false)}>
              Close
            </Button>
          </>
        }
      >
        <Column paddingTop="24" fillWidth gap="24">
          <Switch
            reverse
            isChecked={twoFA}
            onToggle={() => setTwoFA(!twoFA)}
            label="2FA"
            description="Enable two factor authentication"
          />
          <Button onClick={() => setIsSecondDialogOpen(true)}>Change password</Button>
        </Column>
      </Dialog>
      <Dialog
        isOpen={isSecondDialogOpen}
        onClose={() => setIsSecondDialogOpen(false)}
        title="Change password"
        stack
        description="Choose a new password for your account."
        minHeight={firstDialogHeight}
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsSecondDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={() => setIsSecondDialogOpen(false)}>Save</Button>
          </>
        }
      >
        <PasswordInput id="resetPassword" label="New password" />
      </Dialog>
    </Column>
  );
}
