import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { searchSpoonacular } from '../utils/API';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, ToggleButton } from 'react-bootstrap';
import { findByLabelText } from '@testing-library/react';


const recipeStyle = {
        display: 'flex',
        border: '2px solid black',
        padding: '5px, 30px, 5px',
        margin: 'auto',
        maxWidth: '500px',
        textAlign: 'center'
   
    }

const h1Style = {
    display: "flex",
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: ''
}

const btnStyle = {
    border: '2px solid black',
    backgroundColor: '#F29559'
}


const SearchRecipes = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const [checked, setChecked] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const response = await searchSpoonacular(searchInput);

            if (!response.ok) {
                throw new Error('Something went wrong...');
            }

            const { items } = await response.json();

            // TEST RECIPE DATA - MAY CAUSE BIG ISSUES
            const recipeData = items.map((recipe) => ({
                recipeId: recipe.id,
                title: recipe.title,
                author: recipe.author,
                description: recipe.description,
            }));

            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    };

   
    

    return (
        <>

    
        <div>
          <Jumbotron fluid className='text-light bg-dark'>
              <Container style = {recipeStyle}>
                  <div style = {h1Style} >
                  <h1>Search for Recipes.</h1>
                  <Form onSubmit={handleFormSubmit}>
                      <Form.Row>
                          <Col xs={12} md={8}>
                              <Form.Control
                                name='searchInput'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                type='text'
                                size='lg'
                                placeholder='Search for a recipe.'

                            />

                            

                              

                              <ToggleButton
                                id='pantryBtn'
                                type='checkbox'
                                variant='primary'
                                checked={checked}
                                value='1'
                                onChange={(e) => setChecked(e.currentTarget.checked)}
                              >
                                  Use My Pantry
                              </ToggleButton>

                          </Col>
                          <Col xs={12} md={4}>
                              <Button style = {btnStyle} type='submit' variant='success' size='lg'>
                                  Submit Search
                              </Button>
                          </Col>
                      </Form.Row>
                  </Form>
                  </div>
              </Container>
          </Jumbotron>
        </div>
          <Container>
              <h2>
                  {searchedRecipes.length
                    ? `Viewing ${searchedRecipes.length} results:`
                    : 'Search for a recipe to begin'}
              </h2>
              <CardColumns>
                  {searchedRecipes.map((recipe) => {
                      return (
                          <Card key={recipe.recipeId} border='dark'>
                              {recipe.image ? (
                                  <Card.Img src={recipe.image} alt={`Image of ${recipe.title}`} variant='top' />
                              ) : null}
                              <Card.Body>
                                  <Card.Title>{recipe.title}</Card.Title>
                                  <p className='small'>Author: {recipe.author}</p>
                              </Card.Body>
                          </Card>
                      );
                  })}
              </CardColumns>
          </Container>
        </>
    );
};

export default SearchRecipes;