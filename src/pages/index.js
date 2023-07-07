"use client";

import Navbar from "@/components/Navbar";

import { useState } from "react";

const HomePage = () => {
  const [emails, setEmails] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [host, setHost] = useState("");
  const [port, setPort] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addEmail = (email) => {
    // Check if valid email
    if (!email.includes("@")) {
      if (typeof window !== "undefined") {
        alert("Please enter a valid email");
      };
    } else {
      setEmails([...emails, email]);
      setCurrentEmail("");
    }
  };

  const sendEmails = async () => {
    if (emails.length === 0) {
      if (typeof window !== "undefined") {
        alert("Please add at least one email");
      };
    } else {
      const res = await fetch("http://localhost:3000/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emails,
          message,
          subject,
          host,
          port,
          username,
          password,
        }),
      });

      if (res.status === 200) {
        if (typeof window !== "undefined") {
          alert("Emails sent successfully");
        };
      } else {
        if (typeof window !== "undefined") {
          alert("Something went wrong");
        };
      }
    }
  };

  return (
    <div>
      <div className="p-44">
        <h2 className="text-2xl font-bold mb-4">Credentials</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="host"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Host
            </label>
            <input
              type="text"
              id="host"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Host"
              value={host}
              onChange={(e) => setHost(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="port"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Port
            </label>
            <input
              type="number"
              id="port"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Port"
              value={port}
              onChange={(e) => setPort(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <br />
        <h2 className="text-2xl font-bold mb-4">Information</h2>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Add Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add an Email..."
            required=""
            value={currentEmail}
            onChange={(e) => setCurrentEmail(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => addEmail(currentEmail)}
          >
            Add
          </button>
        </div>

        <div className="mt-8 mb-8">
          <p>
            <span className="font-bold">{emails.length}</span> emails added
          </p>
        </div>

        <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
          {emails.map((email) => (
            <li key={email} className="flex items-center space-x-3 font-bold">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>{email}</span>
              <button
                className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-4 py-2"
                onClick={() => setEmails(emails.filter((e) => e !== email))}
              >
                x
              </button>
            </li>
          ))}
        </ul>

        <div>
          <label
            htmlFor="default-subject"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Subject
          </label>

          <input
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your subject..."
            id="default-subject"
            required=""
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>


        <textarea
          className="block w-full mt-20 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your message..."
          required=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <p className="mt-4 border-2 p-4 text-sm text-gray-500" dangerouslySetInnerHTML={{
          __html: message
        }}></p>

        <button
          type="submit"
          className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => sendEmails()}
        >
          Send
        </button>
      </div>
    </div >
  );
};

export default HomePage;
