import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/A_meeting_between_a_man_and_a_woman.jpg/1280px-A_meeting_between_a_man_and_a_woman.jpg',
        address: 'Some adress 5, 12345 Some City',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/A_meeting_between_a_man_and_a_woman.jpg/1280px-A_meeting_between_a_man_and_a_woman.jpg',
        address: 'Some adress 5, 12345 Some City',
        description: 'This is a second meetup'
    }
]

function HomePage(props){
    return <MeetupList meetups={props.meetups} />
}

//export async function getServerSideProps(context) {
//  const req = context.req;
//  const res = context.res;

  // fetch data from an API

//  return {
//      props: {
//          meetups: DUMMY_MEETUPS
//      }
//  }
//}

export async function getStaticProps(){
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        //refresh page 
        revalidate: 1
    };
}

export default HomePage;