import { Loader2Icon, TriangleAlertIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { ChatInput } from '@/components/molecules/ChatInput/ChatInput';
import { useGetChannelById } from '@/hooks/apis/channels/useGetChannelById';

/*************  ✨ Codeium Command 🌟  *************/
/**
 * Page for displaying a channel.
 * 
 * It fetches the channel details and then displays its messages.
 * If the channel is not found, it displays an error message.
 * If the channel is fetching, it displays a loading animation.
 */
export const Channel = () => {

    const { channelId } = useParams();

    const { channelDetails, isFetching, isError } = useGetChannelById(channelId);

    // If the channel is fetching, display a loading animation
    if(isFetching) {
        return (
            <div
                className='h-full flex-1 flex items-center justify-center'
            >
                <Loader2Icon className='size-5 animate-spin text-muted-foreground' />
            </div>
        );
    }

    // If the channel is not found, display an error message
    if(isError) {
        return (
            <div className='h-full flex-1 flex flex-col gap-y-2 items-center justify-center'>
                <TriangleAlertIcon className='size-6 text-muted-foreground' />
                <span className='text-sm text-muted-foreground'>Channel Not found</span>
            </div>
        );
    }

    // If the channel is found, display its messages
    return (
        <div className='flex flex-col h-full'>
            <div className='flex-1' />
            <ChatInput />
        </div>
    );
};
/******  bb464a12-c6b6-47e8-945e-b2c2524ed7b1  *******/