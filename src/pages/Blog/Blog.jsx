import React from 'react';
import './Blog.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Understanding Cryptocurrency Basics',
      date: 'July 1, 2024',
      description: 'An introductory guide to understanding the basics of cryptocurrency and how it works.',
      image: image1,
    },
    {
      title: 'Top 10 Cryptocurrencies to Watch in 2024',
      date: 'June 25, 2024',
      description: 'A comprehensive list of the top 10 cryptocurrencies that are expected to perform well in 2024.',
      image: image2,
    },
    {
      title: 'How to Safely Trade Crypto',
      date: 'June 15, 2024',
      description: 'Tips and strategies for safely trading cryptocurrencies to minimize risks and maximize returns.',
      image: image3,
    },
    {
      title: 'The Future of Blockchain Technology',
      date: 'June 10, 2024',
      description: 'Exploring the future potential of blockchain technology beyond cryptocurrencies.',
      image: image4,
    },
  ];

  return (
    <div className="blog-container">
      <h1>CoinUnity Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2>{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p className="blog-description">{post.description}</p>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
