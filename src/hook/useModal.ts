import { useState } from "react";

export function useModal() {
  const [open, setOpen] = useState<boolean>(false);

  const modalOpen = () => {
    setOpen(true);
  };

  const modalClose = () => {
    setOpen(false); 
  };

  return { open, modalOpen, modalClose };
}
