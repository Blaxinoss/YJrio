
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import VideoSlider from './VideoSlider';
// Define the project data structure
interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

// Sample project data
const projects: Project[] = [
  {
    id: 'crime-unsolved',
    title: 'Unsolved: The Missing Files',
    category: 'True Crime',
    thumbnail: 'https://www.youtube.com/watch?v=zfkeD7CPSo4&t=480s',
    videoUrl: '#',
    description: 'A six-part investigative series exploring cold cases and the families left behind',
  },
  {
    id: 'crime-unsolved',
    title: 'Unsolved: The Missing Files',
    category: 'True Crime',
    thumbnail: 'https://youtu.be/DhIq8tv5LEE',
    videoUrl: '#',
    description: 'A six-part investigative series exploring cold cases and the families left behind',
  },
  {
    id: 'crime-unsolved',
    title: 'Unsolved: The Missing Files',
    category: 'True Crime',
    thumbnail: 'https://youtu.be/2ZvO5bNCmr8',
    videoUrl: '#',
    description: 'A six-part investigative series exploring cold cases and the families left behind',
  },
  {
    id: 'crime-unsolved2',
    title: 'Unsolved: The Missing Files2',
    category: 'True Crime2',
    thumbnail: 'https://youtu.be/Ws9scz1h8Qs',
    videoUrl: '#',
    description: 'A six-part investigative series exploring cold cases and the families left behindwe',
  },
  {
    id: 'crime-unsolved3',
    title: 'Unsolved: The Missing Files3',
    category: 'True Crime3',
    thumbnail: 'https://youtu.be/CxxXY3FOixE',
    videoUrl: '#',
    description: 'A six-part investigative series exploring cold cases and the families left behindwe',
  },

  // {
  //   id: 'story-refugee',
  //   title: 'Displaced: Stories from the Border',
  //   category: 'Documentary',
  //   thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  //   videoUrl: '#',
  //   description: 'An award-winning documentary following three refugee families seeking asylum',
  // },
  // {
  //   id: 'streaming-live',
  //   title: 'LIVE: Inside the Game',
  //   category: 'Streaming',
  //   thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  //   videoUrl: '#',
  //   description: 'Behind the scenes with professional eSports players during world championships',
  // },
  // {
  //   id: 'nature-documentary',
  //   title: 'Wilderness: The Forgotten Coast',
  //   category: 'Documentary',
  //   thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  //   videoUrl: '#',
  //   description: 'Environmental documentary on coastline conservation and climate impact',
  // },
];

const WorkSection = () => {
  return (
    <>
      <section id="work" className="py-10 px-0 md:px-12 lg:px-24 bg-filmmaker-dark">
        <div className="section-inner">
          <div className="mb-12">
            <h2 className="text-accent-gradient font-bold text-2xl mb-2">MY WORK</h2>
            <h3 className="text-6xl font-bold text-white mb-4">Featured Projects</h3>
            <p className="text-gray-300 ">
              A selection of my recent documentary and storytelling work, each crafted to captivate, inform, and inspire.
            </p>
          </div>
        </div>


        <VideoSlider projects={projects} />
      </section>

      <section id="work" className="py-10 px-0 md:px-12 lg:px-24 bg-filmmaker-dark">
        <div className="section-inner">

        </div>
      </section>
    </>
  );
};

export default WorkSection;
