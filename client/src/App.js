import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Footer from './components/Footer';
import SearchRecipes from './pages/SearchRecipes';
import Navbar from './components/Navbar';
import IngredientsList from './components/IngredientsForm';

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
                <Route exact path="/ingredientsForm" component={IngredientsList} />
              </Switch>
            </div>
          <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;