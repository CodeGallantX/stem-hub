"use client";
import { useState } from "react";

const formatTime = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = Math.floor((now - time) / 1000);

    if (diff < 60) return `${diff} seconds ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
    if (diff < 2419200) return `${Math.floor(diff / 604800)} weeks ago`;
    if (diff < 31536000) return `${Math.floor(diff / 2419200)} months ago`;
    return `${Math.floor(diff / 31536000)} years ago`;
};

const ProfileTabs = () => {
    const [activeTab, setActiveTab] = useState("Activity Feed");

    const tabContent = {
        "Activity Feed": (
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-300">Activity Feed</h2>
                <ul className="mt-2 space-y-2 text-sm text-gray-200">
                    <li>You liked a post by @user123. <span className="text-gray-500 float-unset">{formatTime(new Date() - 1000 * 60 * 10)}</span></li>
                    <li>You commented on &ldquo;React vs Vue: Which is better?&rdquo;. <span className="text-gray-500">{formatTime(new Date() - 1000 * 60 * 60)}</span></li>
                    <li>You followed @dev_guru. <span className="text-gray-500">{formatTime(new Date() - 1000 * 60 * 60 * 24)}</span></li>
                    <li>You joined the &ldquo;Frontend Developers&rdquo; community. <span className="text-gray-500">{formatTime(new Date() - 1000 * 60 * 60 * 24 * 7)}</span></li>
                </ul>
            </div>
        ),
        Recent: (
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-300">Recent Actions</h2>
                <ul className="mt-2 space-y-2 text-sm text-gray-200">
                    <li>Updated your profile picture. <span className="text-gray-500">{formatTime(new Date() - 1000 * 60 * 15)}</span></li>
                    <li>Changed your bio to &ldquo;Passionate Frontend Developer&rdquo;. <span className="text-gray-500">{formatTime(new Date() - 1000 * 60 * 60 * 2)}</span></li>
                    <li>Saved an article: &rdquo;Top 10 JavaScript Frameworks for 2024&rdquo;. <span className="text-gray-500">{formatTime(new Date() - 1000 * 60 * 60 * 5)}</span></li>
                </ul>
            </div>
        ),
        "Most Recent": (
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-300">Most Recent Activity</h2>
                <ul className="mt-2 space-y-2 text-sm text-gray-200">
                    <li>Started following @react_master. <span className="text-gray-500">{formatTime(new Date() - 1000 * 60 * 5)}</span></li>
                    <li>Upvoted a question: &ldquo;How to improve web app performance?&rdquo;. <span className="text-gray-500">{formatTime(new Date() - 1000 * 60 * 60)}</span></li>
                    <li>Joined a discussion on &ldquo;Next.js best practices&rdquo;. <span className="text-gray-500">{formatTime(new Date() - 1000 * 60 * 60 * 3)}</span></li>
                </ul>
            </div>
        ),
        Oldest: (
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-300">Oldest Records</h2>
                <ul className="mt-2 space-y-2 text-sm text-gray-200">
                    <li>Created an account on 1st January 2023. <span className="text-gray-500">{formatTime(new Date("2023-01-01"))}</span></li>
                    <li>Published your first post: &ldquo;Hello World!&rdquo;. <span className="text-gray-500">{formatTime(new Date("2023-02-15"))}</span></li>
                    <li>Followed your first user: @code_beginner. <span className="text-gray-500">{formatTime(new Date("2023-03-01"))}</span></li>
                </ul>
            </div>
        ),
    };

    return (
        <div className="w-full max-w-3xl mx-auto rounded-lg">
            <div className="flex border-b border-gray-600">
                {Object.keys(tabContent).map((tab) => (
                    <button
                        key={tab}
                        className={`flex-1 py-2 text-sm font-semibold text-center ${
                            activeTab === tab
                                ? "text-white border-b-2 border-blue-500"
                                : "text-gray-400"
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div>{tabContent[activeTab]}</div>
        </div>
    );
};

export default ProfileTabs;