import { Row, Column, Button, Heading, Line, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Column as="footer" fillWidth horizontal="center" paddingX="l" paddingTop="xl">
      <Column maxWidth="l" fillWidth gap="24">
        <Line background="neutral-alpha-weak" />
        <Row
          className={styles.mobile}
          fillWidth
          paddingY="16"
          gap="24"
          horizontal="between"
          vertical="center"
          s={{ direction: "column", horizontal: "center", align: "center" }}
        >
          <Column gap="4" s={{ align: "center" }}>
            <Heading as="h2" variant="heading-strong-s">
              {person.name}
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {person.role}
            </Text>
          </Column>

          <Row gap="8" wrap horizontal="center">
            {social.map(
              (item) =>
                item.link && (
                  <Button
                    key={item.name}
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    size="s"
                    variant="secondary"
                    weight="default"
                    data-border="rounded"
                  />
                ),
            )}
          </Row>
        </Row>

        <Row
          fillWidth
          paddingBottom="16"
          horizontal="between"
          vertical="center"
          gap="8"
          s={{ direction: "column", horizontal: "center", align: "center" }}
        >
          <Text variant="body-default-xs" onBackground="neutral-weak">
            © {currentYear} {person.name}. All rights reserved.
          </Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            For Contact | +90 536 711 92 69 | +966 56 862 5808 | arg4gg@gmail.com
          </Text>
        </Row>
      </Column>
      <Row height="80" hide s={{ hide: false }} />
    </Column>
  );
};
