import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_INGREDIENT } from '../utils/mutations';


const IngredientsList = () => {
    
    const [ingredientInput, setIngredientInput] = useState({ingredient: ''});
    
    const [addIngredient, { error, data }] = useMutation(ADD_INGREDIENT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!ingredientInput) {
            return false;
        }

        let ingredientSearchValue = $('#ingredientSearchBar').val().trim();

        ingredientSearchValue.push(User.savedIngredients);
    };

    return (
        <>
          <Jumbotron fluid className='text-light bg-dark'>
            <Container>
                <h1>Add ingredients from your pantry</h1>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Row>
                        <Col xs={12} md={8}>
                            <Form.Control
                              name='ingredientSearchBar'
                              value={ingredientInput}
                              onChange={(e) => setIngredientInput(e.target.vaue)}
                              type='text'
                              size='lg'
                              placeholder='Add ingredients here.'
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <Button type='submit' variant='success' size='lg'>
                                Submit Ingredient
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
          </Jumbotron>
        </>
    );
};

export default IngredientsList;