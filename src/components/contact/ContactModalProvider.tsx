"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { ContactModal } from "@/components/contact/ContactModal";

type ContactModalContextValue = {
  isOpen: boolean;
  topic: string | undefined;
  detail: string | undefined;
  open: (topic?: string, detail?: string) => void;
  close: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState<string | undefined>(undefined);
  const [detail, setDetail] = useState<string | undefined>(undefined);

  const open = useCallback((nextTopic?: string, nextDetail?: string) => {
    setTopic(nextTopic);
    setDetail(nextDetail);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, topic, detail, open, close }),
    [isOpen, topic, detail, open, close],
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}
