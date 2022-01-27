import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { searchSpoonacular } from '../utils/API';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns, ToggleButton } from 'react-bootstrap';
import { findByLabelText } from '@testing-library/react';




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
              <Container>
                  <div>
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
                              <Button type='submit' variant='success' size='lg'>
                                  Submit Search!
                              </Button>
                          </Col>
                      </Form.Row>
                  </Form>
                  </div>
              </Container>
          </Jumbotron>
        </div>

        </>
    );
};

export default SearchRecipes;