import { Column, Grid, Heading, Icon, Row, Text } from "@once-ui-system/core";
import type { PortfolioSection } from "@/resources";
import { ShowcaseCard } from "./ShowcaseCard";
import styles from "./ShowcaseCard.module.scss";

const sectionIcon: Record<string, string> = {
  software: "code",
  hardware: "chip",
  creative: "palette",
  builds: "hammer",
};

export const ShowcaseSection = ({ section }: { section: PortfolioSection }) => {
  const icon = sectionIcon[section.id] ?? "imagePlus";

  return (
    <Column id={section.id} fillWidth gap="24" paddingTop="24" style={{ scrollMarginTop: "6rem" }}>
      <Column fillWidth gap="8" maxWidth="s">
        <Row gap="8" vertical="center">
          <Icon name={section.navIcon} size="xs" onBackground="brand-medium" />
          <Text variant="label-default-s" onBackground="brand-medium">
            {section.label}
          </Text>
        </Row>
        <Heading as="h2" variant="display-strong-xs" wrap="balance">
          {section.title}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" wrap="pretty">
          {section.description}
        </Text>
      </Column>

      <Grid
        fillWidth
        columns={section.columns}
        m={{ columns: "2" }}
        s={{ columns: "1" }}
        gap="16"
      >
        {section.items.map((item) => (
          <Column
            key={item.title}
            fillWidth
            className={item.span === 2 ? styles.span2 : undefined}
          >
            <ShowcaseCard item={item} icon={icon} />
          </Column>
        ))}
      </Grid>
    </Column>
  );
};
