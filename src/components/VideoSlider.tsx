import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@/lib/utils'; // Adjust path if needed
import { Navigation, Pagination } from 'swiper/modules';

function getYouTubeEmbedUrl(url: string): string {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    const videoId = match ? match[1] : '';
    return `https://www.youtube.com/embed/${videoId}`;
}

export default function VideoSlider({ projects }) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
            }}
            navigation
            pagination={{ clickable: true }}
            className="px-4"
        >
            {projects.map((project, index) => (
                <SwiperSlide key={project.id}>
                    <div
                        className={cn(
                            "video-card group ",
                            index % 2 === 0 ? "animate-fade-in-right" : "animate-fade-in-left"


                        )}
                        style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'both' }}
                    >
                        <div className="video-container h-72 lg:h-80 relative ">
                            <iframe
                                src={getYouTubeEmbedUrl(project.thumbnail)} className="w-full h-full object-cover"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
