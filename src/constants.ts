import { web, mobile, creator } from './assets';

export const constants = {
  marketingGraph: [
    {
      name: '5/10',
      main_ranch: 4,
    },
    {
      name: '5/17',
      main_ranch: 6,
    },
    {
      name: '5/24',
      main_ranch: 4,
    },
    {
      name: '5/31',
      main_ranch: 5,
    },
    {
      name: '6/7',
      main_ranch: 7,
    },
    {
      name: '6/14',
      main_ranch: 5,
    },
    {
      name: '6/21',
      main_ranch: 6,
    },
  ],
  marketingCards: [
    {
      title: 'Search',
      description:
        'Find and follow labs that spark your interests or are relevant to your reserach goals. You can search for specific labs or users. ',
      icon: web,
    },
    {
      title: 'Create',
      description:
        'Create a new lab. Now you have a free webpage and a program that will track your lab members, publications, and more.',
      icon: mobile,
    },
    {
      title: 'Collaborate',
      description:
        "Converse with partnering labs and share resources. You can also share your lab's webpage with others.",
      icon: creator,
    },
  ],
};
