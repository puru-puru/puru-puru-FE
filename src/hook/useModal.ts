import { useState } from 'react';

export function useModal() {
    const [open, setOpen] = useState<boolean>(false);

    const modalOpen = (): void => {
        setOpen(true);
    };

    const modalClose = (): void => {
        setOpen(false);
    };

    return { open, modalOpen, modalClose };
}
