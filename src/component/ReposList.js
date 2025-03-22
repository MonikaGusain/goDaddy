import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const ReposList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/orgs/godaddy/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="container">
      <h1>GoDaddy Repositories</h1>
      <ul className="repo-list">
        {repos.map(repo => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.id}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposList;