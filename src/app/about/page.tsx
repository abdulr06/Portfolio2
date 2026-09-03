"use client";

import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React, { useState } from "react";
import AmbientBackground from "@/components/AmbientBackground";

export default function About() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 250);
  };

  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <>
      <AmbientBackground />
      
      <style>{`
        @keyframes modalShow {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes modalHide {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.85); }
        }
        @keyframes backdropFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes backdropHide {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .lightbox-overlay {
          animation: backdropFade 0.25s ease-out forwards;
        }
        .lightbox-overlay.closing {
          animation: backdropHide 0.25s ease-in forwards;
        }
        .lightbox-content {
          animation: modalShow 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .lightbox-content.closing {
          animation: modalHide 0.25s ease-in forwards;
        }
      `}</style>

      {selectedImage && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div 
          onClick={handleClose}
          className={`lightbox-overlay ${isClosing ? "closing" : ""}`}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            backgroundColor: "rgba(3, 3, 7, 0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <button
            type="button"
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "32px",
              right: "32px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#fff",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            ✕
          </button>
          
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<div 
            onClick={(e) => e.stopPropagation()}
            className={`lightbox-content ${isClosing ? "closing" : ""}`}
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              maxHeight: "85vh",
              maxWidth: "85vw",
              boxShadow: "0 0 80px rgba(0, 0, 0, 0.8), 0 0 120px rgba(14, 165, 233, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              display: "flex",
            }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                maxHeight: "85vh",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}

      <Column maxWidth="m">
        <Schema
          as="webPage"
          baseURL={baseURL}
          title={about.title}
          description={about.description}
          path={about.path}
          image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        {about.tableOfContent.display && (
          <Column
            left="0"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            position="fixed"
            paddingLeft="24"
            gap="32"
            s={{ hide: true }}
          >
            <TableOfContents structure={structure} about={about} />
          </Column>
        )}
        <Row fillWidth s={{ direction: "column"}} horizontal="center">
          {about.avatar.display && (
            <Column
              className={styles.avatar}
              top="64"
              fitHeight
              position="sticky"
              s={{ position: "relative", style: { top: "auto" } }}
              xs={{ style: { top: "auto" } }}
              minWidth="160"
              paddingX="l"
              paddingBottom="xl"
              gap="m"
              flex={3}
              horizontal="center"
            >
              <Avatar src={person.avatar} size="xl" />
              <Row gap="8" vertical="center">
                <Icon onBackground="accent-weak" name="globe" />
                {person.location}
              </Row>
              {person.languages && person.languages.length > 0 && (
                <Row wrap gap="8">
                  {person.languages.map((language: string, index: number) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<Tag key={index} size="l">
                      {language}
                    </Tag>
                  ))}
                </Row>
              )}

              {about.calendar.display && (
                <Column s={{ hide: true }} paddingTop="16" fillWidth horizontal="center">
                  <Row
                    fitWidth
                    border="brand-alpha-medium"
                    background="brand-alpha-weak"
                    radius="full"
                    padding="4"
                    gap="8"
                    vertical="center"
                    style={{ backdropFilter: "blur(var(--static-space-1))" }}
                  >
                    <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                    <Row paddingX="8">Schedule a call</Row>
                    <IconButton
                      href={about.calendar.link}
                      data-border="rounded"
                      variant="secondary"
                      icon="chevronRight"
                    />
                  </Row>
                </Column>
              )}
            </Column>
          )}
          <Column className={styles.blockAlign} flex={9} maxWidth={40}>
            <Column
              id={about.intro.title}
              fillWidth
              minHeight="160"
              vertical="center"
              marginBottom="32"
            >
              {about.calendar.display && (
                <Row
                  hide
                  s={{ hide: false }}
                  fitWidth
                  border="brand-alpha-medium"
                  background="brand-alpha-weak"
                  radius="full"
                  padding="4"
                  gap="8"
                  marginBottom="m"
                  vertical="center"
                  className={styles.blockAlign}
                  style={{ backdropFilter: "blur(var(--static-space-1))" }}
                >
                  <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                  <Row paddingX="8">Schedule a call</Row>
                  <IconButton
                    href={about.calendar.link}
                    data-border="rounded"
                    variant="secondary"
                    icon="chevronRight"
                  />
                </Row>
              )}
              <Heading className={styles.textAlign} variant="display-strong-xl">
                {person.name}
              </Heading>
              <Text
                className={styles.textAlign}
                variant="display-default-xs"
                onBackground="neutral-weak"
              >
                {person.role}
              </Text>
              {social.length > 0 && (
                <Row
                  className={styles.blockAlign}
                  paddingTop="20"
                  paddingBottom="8"
                  gap="8"
                  wrap
                  horizontal="center"
                  fitWidth
                  data-border="rounded"
                >
                  {social
                      .filter((item) => item.essential)
                      .map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Row s={{ hide: true }}>
                            <Button
                              key={item.name}
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              size="l"
                              key={`${item.name}-icon`}
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      ),
                  )}
                </Row>
              )}
            </Column>

            {about.intro.display && (
              <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
                {about.intro.description}
              </Column>
            )}

            {about.work.display && (
              <>
                <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="s">
                  {about.work.title}
                </Heading>
                <div
                  style={{
                    width: "100%",
                    borderRadius: "24px",
                    padding: "24px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    marginBottom: "32px",
                  }}
                >
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
{about.work.experiences.map((experience: any, index: number) => (
                    <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth gap="8">
                      <Row fillWidth horizontal="between" vertical="end" style={{ marginBottom: "0px" }}>
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {experience.timeframe}
                        </Text>
                      </Row>
                      <Text variant="body-default-s" onBackground="brand-weak" style={{ marginTop: "0px", marginBottom: "4px" }}>
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="8" style={{ marginTop: "0px" }}>
                        {experience.achievements.map(
                          (achievement: React.ReactNode, achIndex: number) => (
                            <Text
                              as="li"
                              variant="body-default-m"
                              key={`${experience.company}-${achIndex}`}
                              style={{ paddingTop: "2px", paddingBottom: "2px" }}
                            >
                              {achievement}
                            </Text>
                          ),
                        )}
                      </Column>
                      {experience.images && experience.images.length > 0 && (
                        <Row fillWidth paddingTop="xs" gap="12" wrap>
                          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                          {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
{experience.images.map((image: any, imgIndex: number) => (
                            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                            <div
                              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                              key={imgIndex}
                              onClick={() => setSelectedImage({ src: image.src, alt: image.alt ?? "Certificate" })}
                              style={{
                                cursor: "pointer",
                                overflow: "hidden",
                                borderRadius: "12px",
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5)",
                                width: "240px",
                                height: "auto",
                                transition: "transform 0.2s ease, border-color 0.2s ease",
                              }}
                            >
                              <img
                                src={image.src}
                                alt={image.alt ?? "Certificate"}
                                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                              />
                            </div>
                          ))}
                        </Row>
                      )}
                    </Column>
                  ))}
                </div>
              </>
            )}

            {about.studies.display && (
              <>
                <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="s">
                  {about.studies.title}
                </Heading>
                <div
                  style={{
                    width: "100%",
                    borderRadius: "24px",
                    padding: "24px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    marginBottom: "32px",
                  }}
                >
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
{about.studies.institutions.map((institution: any, index: number) => (
                    <Column key={`${institution.name}-${index}`} fillWidth gap="8">
                      <Text id={institution.name} variant="heading-strong-l" style={{ marginBottom: "0px" }}>
                        {institution.name}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak" style={{ marginTop: "0px" }}>
                        {institution.description}
                      </Text>
                    </Column>
                  ))}
                </div>
              </>
            )}

            {about.technical.display && (
              <>
                <Heading
                  as="h2"
                  id={about.technical.title}
                  variant="display-strong-s"
                  marginBottom="s"
                >
                  {about.technical.title}
                </Heading>
                <div
                  style={{
                    width: "100%",
                    borderRadius: "24px",
                    padding: "24px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    marginBottom: "32px",
                  }}
                >
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
{about.technical.skills.map((skill: any, index: number) => (
                    <Column key={`${skill}-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
index}`} fillWidth gap="8">
                      <Text id={skill.title} variant="heading-strong-l" style={{ marginBottom: "0px" }}>
                        {skill.title}
                      </Text>
                      <Text variant="body-default-m" onBackground="neutral-weak" style={{ marginTop: "0px", marginBottom: "2px" }}>
                        {skill.description}
                      </Text>
                      {skill.tags && skill.tags.length > 0 && (
                        <Row wrap gap="8" paddingTop="2">
                          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                          {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
{skill.tags.map((tag: any, tagIndex: number) => (
                            <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                              {tag.name}
                            </Tag>
                          ))}
                        </Row>
                      )}
                      {skill.images && skill.images.length > 0 && (
                        <Row fillWidth paddingTop="xs" gap="12" wrap>
                          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                          {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
{skill.images.map((image: any, imgIndex: number) => (
                            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                            <div
                              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                              key={imgIndex}
                              onClick={() => setSelectedImage({ src: image.src, alt: image.alt ?? "Skill image" })}
                              style={{
                                cursor: "pointer",
                                overflow: "hidden",
                                borderRadius: "12px",
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5)",
                                width: "240px",
                                height: "auto",
                                transition: "transform 0.2s ease, border-color 0.2s ease",
                              }}
                            >
                              <img
                                src={image.src}
                                alt={image.alt ?? "Skill image"}
                                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                              />
                            </div>
                          ))}
                        </Row>
                      )}
                    </Column>
                  ))}
                </div>
              </>
            )}
          </Column>
        </Row>
      </Column>
    </>
  );
}