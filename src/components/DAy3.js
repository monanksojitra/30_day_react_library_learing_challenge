import React from "react";
import { Helmet } from "react-helmet";
// Define an array of blog post objects
const blogPosts = [
  {
    title: "How I Achieved a Personal Goal",
    content:
      "I recently set a challenging goal for myself and worked diligently to achieve it. In this blog post, I'll share my journey, the obstacles I faced, and the strategies I used to successfully reach my goal. Hopefully, my experience will inspire and motivate you in your own goal-setting endeavors.",
    image:
      "https://www.mytimemanagement.com/images/personal_goal_setting_full_9267662.png",
  },
  {
    title: "Learning from My Mistakes",
    content:
      "Mistakes are a part of life, and I'm no exception. In this post, I'll open up about a significant mistake I made, the consequences it had, and, most importantly, the valuable lessons I learned from it. It's essential to embrace our failures and use them as stepping stones towards personal growth.",
    image:
      "https://imageio.forbes.com/b-i-forbesimg/amyanderson/files/2013/04/shutterstock_99137078.jpg?format=jpg&width=1200",
  },
  {
    title: "Answering Your FAQs",
    content:
      "I've compiled a list of frequently asked questions I receive in my niche. From beginner's queries to more advanced topics, I'll provide clear and concise answers to help you navigate the complexities of this field. If you have questions, chances are you'll find the answers here!",
    image:
      "https://img.freepik.com/premium-vector/happy-little-boy-student-rising-hand-answering-question-sitting-his-desk-classroom_535862-701.jpg",
  },
  {
    title: "My Essential Toolkit",
    content:
      "As a professional in my niche, I've curated a must-have toolkit that has significantly improved my workflow and productivity. In this post, I'll share the tools, software, and resources that have become indispensable in my daily work. Whether you're a newbie or a seasoned expert, you'll find something valuable here.",
    image:
      "https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2022-02-digital-first-toolkit-hero.jpg?d=500x500&f=inside",
  },
  {
    title: "A Day in My Niche",
    content:
      "Ever wondered what a typical day looks like for someone in my niche? I'll take you through a detailed 'day in the life' narrative, from morning routines to tasks, challenges, and even moments of inspiration. Get a glimpse into the daily grind and passion that drives professionals like me.",
    image:
      "https://www.pittmanunlimited.com/wp-content/uploads/2021/07/Define-Your-Niche-Pittman-Unlimited.jpg",
  },
  {
    title: "Unveiling Niche Truths",
    content:
      "In this eye-opening post, I'll reveal some of the most crucial truths in my niche. These insights, often overlooked or misunderstood, can be game-changers for anyone looking to excel in this field. Understanding these truths is key to success and innovation.",
    image:
      "https://media.licdn.com/dms/image/D4D12AQER1-OMdY_dtw/article-cover_image-shrink_600_2000/0/1691601905513?e=2147483647&v=beta&t=",
  },

  // Add more blog post objects as needed
];

function Day3() {
  return (
    <div className="container m-5 d-flex justify-content-cente flex-wrap">
      {blogPosts.map((post, index) => (
        <div className="m-2" key={index}>
          <Helmet>
            <title>{post.title}</title>
            <meta name="description" content={post.content} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.content} />
            <meta property="og:image" content={post.image} />
            <meta name="twitter:title" content={post.title} />
            <meta name="twitter:description" content={post.content} />
            <meta name="twitter:image" content={post.image} />
          </Helmet>

          <div className="card" style={{ width: "50vh" }}>
            <img
              src={post.image}
              alt={post.title}
              className="card-img-top img-fluid"
              style={{height:"30vh"}}
            />
            <div className="card-body">
              <h4 className="card-title">{post.title}</h4>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Day3;
