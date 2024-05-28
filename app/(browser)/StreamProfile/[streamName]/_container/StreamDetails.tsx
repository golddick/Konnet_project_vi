import { Button } from '@/components/ui/button'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import EditBtn from './EditBtn';
import FollowBtn from '@/components/FollowBtn';
import PuchaseBtn from './PuchaseBtn';
import StreamGallery from './StreamGallery';
// import { StreamGallery } from './StreamGallery';


const StreamDetails = () => {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    const isCreator = true

  return (
    <div className='w-full  '>
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-2 relative p-4'>
            <div className='flex flex-col space-y-3 w-full '>

           <PuchaseBtn/>

            <ul>
                <li>
                    <span className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Title:</span> <i style={{fontSize:'13px', fontWeight:'500'}}>sam link</i>
                </li>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Description:</span> <i style={{fontSize:'13px', fontWeight:'500'}} >Professional thief Mason attempts his biggest heist with his brother, robbing a bank. When it goes wrong, they're trapped inside surrounded by law enforcement.
                         Tension rises as Mason negotiates with his ex-lover, the lead negotiator.</i>
                </li>
            </ul>
            </div>
            <div className='flex flex-col space-y-3 w-full'>
                {isCreator && (
                    <div className={`${isLargeScreen ? '' : 'absolute top-4 right-4'}`}>
                        <EditBtn/>
                    </div>
                )}

                {!isCreator && (
                    <FollowBtn/>
                )}

       

            <ul>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Organizer:</span> <i style={{fontSize:'13px', fontWeight:'500'}}>sam link</i>
                </li>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Participants:</span> <i style={{fontSize:'13px', fontWeight:'500'}}>sam,
                    John Travolta, Kristin Davis, Lukas Haas</i>
                </li>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Price:</span> <i style={{fontSize:'13px', fontWeight:'500'}}>#2,500.00</i>
                </li>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Date:</span> <i style={{fontSize:'13px', fontWeight:'500'}}>12-02-2024</i>
                </li>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Time:</span> <i style={{fontSize:'13px', fontWeight:'500'}}>12:30:pm</i>
                </li>
            </ul>
            </div>
        </div>
       <StreamGallery/>

      
    </div>
  )
}

export default StreamDetails