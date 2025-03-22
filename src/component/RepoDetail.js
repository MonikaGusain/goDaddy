import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css';

const RepoDetail = () => {
  const { repoId } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repositories/${repoId}`);
        setRepo(response.data);
      } catch (error) {
        console.error('Error fetching repo details:', error);
      }
    };

    fetchRepo();
  }, [repoId]);

  if (!repo) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <div className="repo-detail">
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
        <p><a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
        <p>Language: {repo.language}</p>
        <p>Forks: {repo.forks_count}</p>
        <p>Open Issues: {repo.open_issues_count}</p>
        <p>Watchers: {repo.watchers_count}</p>
      </div>
    </div>
  );
};

export default RepoDetail;