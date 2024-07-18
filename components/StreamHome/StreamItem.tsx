import Link from 'next/link';
import React from 'react';
import ThumbnailCard from './ThumbnailCard';
import UserIcon from '../Navbar/_component/userIcon/UserIcon';

interface Stream {
  id: string;
  streamName: string;
  description: string;
  thumbNailImg: string;
  eventGallery: string[];
  streamUrl: string;
}

interface StreamItemProps {
  stream: Stream;
}

const StreamItem = ({ stream }: StreamItemProps) => {
  return (
    <Link href={`/StreamProfile/${stream.streamName}`}>
      <div className='  w-full space-y-4 Container'>
        <ThumbnailCard img={stream.thumbNailImg} isLive={true} />

        <div className='flex gap-x-3'>
          <div>
            <UserIcon isLoggedIN={true} isLive={false} />
          </div>

          <div className='flex flex-col text-sm overflow-hidden max-w-[300px]'>
            <p className='truncate font-semibold hover:text-muted-foreground text-[#b28228]'>{stream.streamName}</p>
            <p className='flex text-muted-foreground truncate '> {stream.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StreamItem;
