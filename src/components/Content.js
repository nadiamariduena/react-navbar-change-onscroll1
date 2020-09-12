import React from "react";

const Content = () => {
  const dummyPost = {
    title: `Here's a blog post title`,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  const posts = Array(40).fill(dummyPost);

  return (
    <React.Fragment>
      <section id="top">
        <h1>ContenT section</h1>

        <div className="someText">
          {posts.map((post, i) => {
            return (
              <div key={i} style={{ marginBottom: 50 }}>
                <h3 style={{ marginBottom: 0 }}>{post.title}</h3>
                <p>{post.summary}</p>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Content;
