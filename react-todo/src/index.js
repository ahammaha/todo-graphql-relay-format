import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/v1alpha1/graphql',
  headers: {
    "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1qRXhNekpCUkRoQk5qUTVOMFUyUVVFeE1rWTFPRVpDTXpVME5qQTJNak5GUlRjeU1ETkZPUSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Imdvb2dsZS1vYXV0aDJ8MTA0NjA0MTMzODk0NTYwMTc1NzAxIn0sImdpdmVuX25hbWUiOiJNYWhhbGFrc2htaSIsImZhbWlseV9uYW1lIjoiUmFtYW5hdGhhbiIsIm5pY2tuYW1lIjoiYWhhbW1haGFsYWtzaG1pIiwibmFtZSI6Ik1haGFsYWtzaG1pIFJhbWFuYXRoYW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy0tTk9pWmZEa1NKRS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFHZy92VzNZTTNKSDlLNC9waG90by5qcGciLCJnZW5kZXIiOiJmZW1hbGUiLCJsb2NhbGUiOiJlbiIsInVwZGF0ZWRfYXQiOiIyMDE5LTA0LTA4VDA0OjAzOjQ5LjY0NloiLCJpc3MiOiJodHRwczovL2Rldi03dTMtcXJzai5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDQ2MDQxMzM4OTQ1NjAxNzU3MDEiLCJhdWQiOiJsc2pOMk15TUF3TkhyN1pWU3Jzd040RFdrYjgxcVQ2ViIsImlhdCI6MTU1NDY5NjIyOSwiZXhwIjoxNTU0NzMyMjI5LCJhdF9oYXNoIjoiVzhJNWxaOFVVcW9OUHllTkE5djN3dyIsIm5vbmNlIjoiTjVZNjhqSDBJZm9Uai1EVWc3Z01uYkhMeGc3ZlJkeDYifQ.jSeScfBwabbL_1aruQ5TARTyxo_Fs5dqAIv4Y4dDlYUU4IKVs5TrR7erLrTTj-HafWIcTqO17f-SkAUVmJXpzPGxUpXgZSiHZhaoETYm32dNGyq0HXgiuOjK5JDW2O0QxryblrUt-QZt_Mdz00LUZlak3YjvJTVnLt0apGbc8OK5OYQhIByP27F33yhn5-xU8FmbuTXc9ydRzkT2nATjVKWrB0HZNC6zfgRbQqSNqEymEEiMzAOnSXlJ7D553ONvQ7zhEkEMNO1l-ZWd-eJKORlu5jFbwSTz6prRJO3JAnnQd1e_pGKdCy_8HmH0k4XnA6AGlP0Z1Kkmz6gJTqjVfQ"
  	//"x-hasura-admin-secret": 'maha'
   }
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
