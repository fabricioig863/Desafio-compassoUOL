import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;

  margin-top: 80px;
  line-height: 56px;

  max-width: 450px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    transition: 0.2s;
    cursor: pointer;
  }

  button:hover {
    background: rgb(16, 201, 96);
  }
`;

export const Repositories = styled.div`
  #res {
    max-width: 700px;
  }
  #res .resRepo {
    margin-top: 30px;
    border: 1px solid #e6e6f0;
    padding: 1.6rem;
    border-radius: 5px;
    display: grid;
    grid-template-areas:
      "repoItemUrl"
      "repoItemStarts"
      "repoItemWatch"
      "repoItemForks";
    grid-template-columns: 55% 15% 15% 15%;
    grid-template-rows: auto;
    column-gap: 0.4rem;
    font: 1rem Roboto;
    line-height: 2.6rem;
    background-color: white;
  }

  .resRepoUrl {
    grid-area: repoItemUrl;
    grid-column: 1;
    grid-row: 1;
  }
  .resRepoUrl a {
    text-decoration: none;
    font: 700 1rem Roboto;
    color: #3a3a3b;
  }
  .resRepoStarts {
    grid-area: repoItemStarts;
    grid-column: 2;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d1210e;
    color: #ffffff;
    border-radius: 5px;
  }
  .resRepoWatch {
    grid-area: resItemWatch;
    grid-column: 3;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffc107;
    color: #ffffff;
    border-radius: 5px;
  }
  .resRepoForks {
    grid-area: repoItemForks;
    grid-column: 4;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #04bf58;
    color:  #ffffff;
    border-radius: 5px;
  }

`;
