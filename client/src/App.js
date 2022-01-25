import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
<<<<<<< HEAD
import Header from './components/Header';
=======
>>>>>>> fc99a649b3ab3a58014ff9eafda13901b49d9eaa
import Footer from './components/Footer';
import SearchRecipes from './pages/SearchRecipes';
import IngredientsList from './pages/IngredientsList';
import Navbar from './components/Navbar';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
          <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={SearchRecipes} />
                <Route exact path="/ingredients" component={IngredientsList} />
              </Switch>
            </div>
          <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
