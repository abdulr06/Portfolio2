import { Column, Grid, Heading, Icon, Media, Row, Tag, Text } from "@once-ui-system/core";
import type { PortfolioItem } from "@/resources";
import styles from "./ShowcaseCard.module.scss";

interface ShowcaseCardProps {
  item: PortfolioItem;
  /** Icon shown inside the empty media placeholder */
  icon?: string;
}

const Placeholder = ({
  aspectRatio = "16 / 10",
  icon = "imagePlus",
  label,
}: {
  aspectRatio?: string;
  icon?: string;
  label?: string;
}) => (
  <Column
    fillWidth
    center
    gap="8"
    background="neutral-weak"
    border="neutral-alpha-weak"
    radius="m"
    aspectRatio={aspectRatio}
    className={styles.placeholder}
  >
    <Icon name={icon} size="m" onBackground="neutral-weak" />
    <Text variant="label-default-s" onBackground="neutral-weak" align="center">
      {label ?? "Add image"}
    </Text>
  </Column>
);

export const ShowcaseCard = ({ item, icon = "imagePlus" }: ShowcaseCardProps) => {
  return (
    <Column
      fillWidth
      fillHeight
      radius="l"
      padding="12"
      gap="12"
      className={styles.card}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
    >
      <div style={{ width: "100%", overflow: "hidden", borderRadius: "12px" }}>
        {item.video ? (
          // biome-ignore lint/a11y/useMediaCaption: <explanation>
          <video  
            src={item.video}
            controls
            playsInline
            className="w-full h-full object-cover"
            style={{ display: "block", width: "100%" }}
          />
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            style={{ display: "block", width: "100%" }}
          />
        )}
      </div>

      {item.gallery ? (
        <Grid columns="4" s={{ columns: "2" }} gap="8" fillWidth>
          {Array.from({ length: item.gallery }).map((_, index) => (
            <Placeholder
              key={`${item.title}-tile-${index}`}
              aspectRatio="1 / 1"
              icon={icon}
              label=" "
            />
          ))}
        </Grid>
      ) : null}

      <Column fillWidth gap="8" paddingX="8" paddingTop="4" paddingBottom="8">
        <Heading as="h3" variant="heading-strong-s" wrap="balance">
          {item.title}
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" wrap="pretty">
          {item.description}
        </Text>
        {item.tags?.length ? (
          <Row gap="8" wrap paddingTop="4">
            {item.tags.map((tag) => (
              <Tag key={tag} size="s" variant="neutral" label={tag} />
            ))}
          </Row>
        ) : null}
      </Column>
    </Column>
  );
};