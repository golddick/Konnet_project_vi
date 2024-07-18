'use client'

import React from 'react';
import StreamInfo from './_container/StreamInfo';
import { Wrapper } from '@/lib/wrapper';
import { useChatSiderbar } from '@/store/use-sideBar'
import RegToggle from '@/components/Recommended/_component/RegToggle';

const Page = () => {
  const {collapsed} = useChatSiderbar((state) => state)
  const streamData = [{}];

  return (
    <div className=''>
      <StreamInfo stream={streamData} />
    </div>
  );
};

export default Page;
