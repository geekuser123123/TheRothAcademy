"use client";

import * as Accordion from "@radix-ui/react-accordion";

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible className="mt-12 divide-y divide-r-line border-y border-r-line">
      {items.map((item) => (
        <Accordion.Item key={item.question} value={item.question}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-body normal-case">
              {item.question}
              <span aria-hidden className="text-r-gold transition-transform group-data-[state=open]:rotate-45">
                +
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-5 text-sm text-r-muted font-body normal-case">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
