import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const useConfirm = ({
    title,
    message
}) => {

    const [promise, setPromise] = useState(null);

    async function confirmation() {
        console.log('Confirmation triggered');
        return new Promise((resolve) => {
            setPromise({resolve});
        });
    }

    // close the confirmation dialog
    const handleClose = () => {
        setPromise(null);
    };

    // resume the logic
    const handleConfirm = () => {
        promise?.resolve(true);
        handleClose();
    };

    // this dialog box is triggerd only when the promise is not null
    // when promise is not null, when the confirmation function is called
    // inside the new promise construtor ,we set the promise to resolve state
    const ConfirmDialog = () => {
        return (
            <Dialog open={promise !== null} onOpenChange={handleClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {title}
                        </DialogTitle>
                        <DialogDescription>
                            {message}
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <Button
                            onClick={handleClose}
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleConfirm}
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
    };

    return {ConfirmDialog, confirmation};

};