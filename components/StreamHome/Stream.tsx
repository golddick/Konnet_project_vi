import React from 'react';
import StreamItem from './StreamItem';

const Stream = () => {
  const streamData = [
    {
      id: '1',
      streamName: 'Stream 1',
      description: 'Description of Stream 1',
      specialAttendees: ['Attendee 1', 'Attendee 2', 'Attendee 3'],
      thumbNailImg:'https://cdn-img1.imgworlds.com/assets/e3873302-212a-4c3a-aab3-c3bee866903c.jpg?key=home-gallery',
      eventGallery: [
        'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGyYdElOtXEtR4QfcmwgstoarnId4Ph0f1jOWJMced1utLJwJ6yJTq2IGe9YqWkBxt9Q&usqp=CAU',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
      ],
      streamUrl: 'https://www.youtube.com/watch?v=VArWZSlBtro',
    },
    {
      id: '2',
      streamName: 'Stream 2',
      description: 'Description of Stream 2',
      specialAttendees: ['Attendee A', 'Attendee B', 'Attendee C'],
      thumbNailImg:'https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg',
      eventGallery: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6ybM-o2Sp2MFlG7VN1lQMaDzygC38g1Z9Bl5bDNr8sjMZIHtGiqpKYze-Fe5zHoRQxI&usqp=CAU',
        'https://imgv3.fotor.com/images/slider-image/Female-portrait-picture-enhanced-with-better-clarity-and-higher-quality-using-Fotors-free-online-AI-photo-enhancer.jpg',
        'https://deep-image.ai/app/static/media/app-info-generator.7c28e12e7446aa7894d0.webp',
      ],
      streamUrl: 'https://www.youtube.com/watch?v=PKov1mwpLfE',
    },
    {
      id: '2',
      streamName: 'Stream 2',
      description: 'Description of Stream 2',
      specialAttendees: ['Attendee A', 'Attendee B', 'Attendee C'],
      thumbNailImg:'https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg',
      eventGallery: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6ybM-o2Sp2MFlG7VN1lQMaDzygC38g1Z9Bl5bDNr8sjMZIHtGiqpKYze-Fe5zHoRQxI&usqp=CAU',
        'https://imgv3.fotor.com/images/slider-image/Female-portrait-picture-enhanced-with-better-clarity-and-higher-quality-using-Fotors-free-online-AI-photo-enhancer.jpg',
        'https://deep-image.ai/app/static/media/app-info-generator.7c28e12e7446aa7894d0.webp',
      ],
      streamUrl: 'https://www.youtube.com/watch?v=PKov1mwpLfE',
    },
    {
      id: '2',
      streamName: 'Stream 2',
      description: 'Description of Stream 2',
      specialAttendees: ['Attendee A', 'Attendee B', 'Attendee C'],
      thumbNailImg:'https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg',
      eventGallery: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6ybM-o2Sp2MFlG7VN1lQMaDzygC38g1Z9Bl5bDNr8sjMZIHtGiqpKYze-Fe5zHoRQxI&usqp=CAU',
        'https://imgv3.fotor.com/images/slider-image/Female-portrait-picture-enhanced-with-better-clarity-and-higher-quality-using-Fotors-free-online-AI-photo-enhancer.jpg',
        'https://deep-image.ai/app/static/media/app-info-generator.7c28e12e7446aa7894d0.webp',
      ],
      streamUrl: 'https://www.youtube.com/watch?v=PKov1mwpLfE',
    },
    {
      id: '2',
      streamName: 'Stream 2',
      description: 'Description of Stream 2',
      specialAttendees: ['Attendee A', 'Attendee B', 'Attendee C'],
      thumbNailImg:'https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg',
      eventGallery: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6ybM-o2Sp2MFlG7VN1lQMaDzygC38g1Z9Bl5bDNr8sjMZIHtGiqpKYze-Fe5zHoRQxI&usqp=CAU',
        'https://imgv3.fotor.com/images/slider-image/Female-portrait-picture-enhanced-with-better-clarity-and-higher-quality-using-Fotors-free-online-AI-photo-enhancer.jpg',
        'https://deep-image.ai/app/static/media/app-info-generator.7c28e12e7446aa7894d0.webp',
      ],
      streamUrl: 'https://www.youtube.com/watch?v=PKov1mwpLfE',
    },
  ];

  return (
    <div className='grid py-2 gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full px-2'>
      {streamData.map((stream) => (
        <StreamItem key={stream.id} stream={stream} />
      ))}
    </div>
  );
};

export default Stream;
