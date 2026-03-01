import React from "react";
import Avatar from "./Avatar";
import SocialLinksCard from "./SocialLinksCard";

const AboutMe = () => {
  return (
    <section className="mb-5 text-gray-900 dark:text-gray-100">
      <Avatar />
      <h1 className="text-2xl font-bold">Rahul Thakur Himachali</h1>
      <p className="mt-4 mb-4">
        React & React Native developer building web and mobile apps with Expo.
        Cross-platform from one codebase. Shipped apps used by over a million
        users.
      </p>
      <SocialLinksCard />
    </section>
  );
};

export default AboutMe;
