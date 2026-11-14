import React, { useState, useEffect } from "react";
import { DiGitMerge, DiGitPullRequest } from "react-icons/di";
import { AiFillGithub, AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { motion } from "framer-motion";
import { aboutMe } from "../constants";

const fallbackRepos = [
  {
    id: 1,
    name: "Stadium_management",
    description: "Venue and event management system handling seat allocations, ticketing, and scheduling.",
    html_url: "https://github.com/Siddharthshetty02/Stadium_management",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    owner: {
      login: "Siddharthshetty02",
      avatar_url: "https://github.com/Siddharthshetty02.png",
    },
  },
  {
    id: 2,
    name: "CarbonWise",
    description: "Carbon footprint tracking and sustainability awareness application.",
    html_url: "https://github.com/Siddharthshetty02",
    language: "JavaScript / React",
    stargazers_count: 0,
    forks_count: 0,
    owner: {
      login: "Siddharthshetty02",
      avatar_url: "https://github.com/Siddharthshetty02.png",
    },
  },
  {
    id: 3,
    name: "IoT-Physiotherapy-Monitoring",
    description: "Knee angle estimation and rehabilitation monitoring prototype with ESP32 and BLE.",
    html_url: "https://github.com/Siddharthshetty02",
    language: "Python / C++",
    stargazers_count: 0,
    forks_count: 0,
    owner: {
      login: "Siddharthshetty02",
      avatar_url: "https://github.com/Siddharthshetty02.png",
    },
  },
];

const RepoCard = ({ repo, index }) => {
  return (
    <motion.div
      className="flex flex-col justify-between px-6 py-6 rounded-[20px] transition-all duration-300 transform border border-gray-800 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/10 bg-[#11101D]/70"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <AiFillGithub className="text-teal-300 text-2xl" />
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins font-semibold text-lg text-white hover:text-teal-300 transition-colors"
            >
              {repo.name}
            </a>
          </div>
        </div>

        <p className="font-poppins text-sm text-dimWhite line-clamp-3 mb-4 leading-relaxed">
          {repo.description || "Public repository on GitHub."}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-800/80 text-xs font-poppins text-dimWhite">
        <span className="flex items-center gap-1.5 text-teal-200">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400 inline-block"></span>
          {repo.language || "Code"}
        </span>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-teal-300 transition-colors font-medium flex items-center gap-1"
        >
          View on GitHub &rarr;
        </a>
      </div>
    </motion.div>
  );
};

const OpenSource = () => {
  const [repos, setRepos] = useState(fallbackRepos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${aboutMe.githubUsername}/repos?sort=updated&per_page=6`
        );
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
          }
        }
      } catch (err) {
        console.warn("Using curated repositories fallback:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="openSource" className="mb-12">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8">
        <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
          Open Source & Code
        </h1>
        <a
          href={`https://github.com/${aboutMe.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-poppins text-sm text-teal-300 hover:underline flex items-center gap-1 mt-2 sm:mt-0"
        >
          Explore GitHub Profile &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <RepoCard key={repo.id || index} repo={repo} index={index} />
        ))}
      </div>
    </section>
  );
};

export default OpenSource;