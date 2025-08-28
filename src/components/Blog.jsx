import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';

const Blog = () => {
  const blogPosts = [
    {
      image: img1,
      title: 'Building AI Chatbots with LangChain',
      date: 'Sunday, Jan 14, 2024',
      excerpt: 'A comprehensive guide to creating intelligent chatbots using LangChain and FastAPI with contextual memory.'
    },
    {
      image: img2,
      title: 'LLM Integration Best Practices',
      date: 'Monday, Feb 20, 2024',
      excerpt: 'Exploring effective strategies for integrating Large Language Models into production applications.'
    },
    {
      image: img3,
      title: 'FastAPI for AI Applications',
      date: 'Wednesday, Mar 15, 2024',
      excerpt: 'How to build high-performance AI APIs using FastAPI with JWT authentication and Redis caching.'
    },
    {
      image: img4,
      title: 'Deploying AI Apps on AWS',
      date: 'Friday, Apr 7, 2024',
      excerpt: 'Step-by-step guide to deploying AI applications on AWS EC2 with Docker and Kubernetes.'
    },
    {
      image: img5,
      title: 'React.js with AI Backends',
      date: 'Tuesday, May 2, 2024',
      excerpt: 'Building modern React.js frontends that seamlessly integrate with AI-powered backend services.'
    },
    {
      image: img6,
      title: 'Microservices for AI Systems',
      date: 'Thursday, Jun 22, 2024',
      excerpt: 'Architecting scalable AI systems using microservices with Spring Boot and containerization.'
    }
  ];

  return (
    <section className="blog" id="blog">
      <div className="main-text">
        <h2 className="heading">Blog</h2>
        <span>AI & Technology Insights</span>
      </div>

      <div className="blog-box">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            576: { slidesPerView: 2, spaceBetween: 10 },
            1200: { slidesPerView: 3, spaceBetween: 20 }
          }}
          className="mySwiper"
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="card-top">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="card-info">
                  <h2>{post.title}</h2>
                  <span className="date">{post.date}</span>
                  <p className="excerpt">{post.excerpt}</p>
                  <a href="#" className="readMore">Read More</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Blog;