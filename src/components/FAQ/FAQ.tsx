import { Title, Container, Accordion, ThemeIcon, rem } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import classes from "./FAQ.module.css";

const faqs = [
  {
    question: "What does this app do?",
    answer: (
      <p>
        <i>(Marathi for)</i> Look at the bed . <br />
        Visually create bed files for references or visualize references given a
        bed file for Nanoporetech Adaptive Sampling. <br />
        Compliments <a href="https://labs.epi2me.io/bed-bugs/">Bed Bugs</a>
      </p>
    ),
  },
  {
    question: "What is the bed file format",
    answer: (
      <p>
        This app uses the bed file format based on:{" "}
        <a href="https://www.ensembl.org/info/website/upload/bed.html">
          ENSEMBL BED Upload format
        </a>
      </p>
    ),
  },
];

export default function FAQ() {
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion
          chevronPosition="right"
          defaultValue="faq-0"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{
            label: { color: "var(--mantine-color-black)" },
            item: { border: 0 },
          }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ThemeIcon>
          }
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              className={classes.item}
              value={`faq-${index}`}
            >
              <Accordion.Control>{faq.question}</Accordion.Control>
              <Accordion.Panel>{faq.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}
