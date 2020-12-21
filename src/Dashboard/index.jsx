import React, { useState } from "react";
import logoImg from "../assets/logo-compasso.png";
import api from "../services/api";
import { Title, Form, Repositories } from "./styles";

const Dashboard = () => {
  const [result, setResult] = useState([]);
  let usuario = "";

  async function searchUser() {
    await api
      .get(`users/${usuario}/repos`)
      .then((response) => {
        setResult(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input
          onChange={(event) => {
            usuario = event.target.value;
          }}
          placeholder="Digite o nome do repositório"
        />
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            searchUser({ result });
          }}
        >
          Pesquisar
        </button>
      </Form>

      <Repositories>
        {result.map((res) => (
          <div id="res">
            <div className="resRepo">
              <span className="resRepoUrl">
                <a href={res.html_url} target="_black">
                  {res.name}
                </a>
              </span>
              <span className="resRepoStarts">
                Starts: {res.stargazers_count}
              </span>
              <span className="resRepoWatch">Watch: {res.watchers_count}</span>
              <span className="resRepoForks">Forks: {res.forks_count}</span>
            </div>
          </div>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
