import React, { useState } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_INGREDIENT } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { QUERY_INGREDIENTS } from '../../utils/queries';
import { GET_ME } from '../../utils/queries';

const IngredientsForm = () => {

    const [searchedIngredients, setSearchedIngredients] = useState([]);

    const [ingredientInput, setIngredientInput] = useState('');

    const [validated] = useState(false);

    const [addIngredient, { error }] = useMutation(ADD_INGREDIENT, {
        update(cache, { data: { addIngredient } }) {
            try {
                const { ingredients } = cache.readQuery({ query: QUERY_INGREDIENTS });
                cache.writeQuery({
                    query: QUERY_INGREDIENTS,
                    data: { ingredients: [addIngredient, ...ingredients] }
                });
            } catch (e) {
                console.error(e);
            }

            const { me } = cache.readQuery({ query: GET_ME });
            cache.writeQuery({
                query: GET_ME,
                data: { me: { ...me, ingredients: [...me.ingredients, addIngredient] } }
            });
        }
    });

    const handleAddIngredient = async name => {

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            await addIngredient({
                variables: { name },
            });

            setIngredientInput('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <Container>
                <h1>Add Ingredients to your Pantry</h1>
                <Form onSubmit={handleAddIngredient}>
                    <Form.Row>
                        <Col xs={12} md={8}>
                            <Form.Control
                              name='ingredientInput'
                              value={ingredientInput}
                              onChange={(e) => setIngredientInput(e.target.value)}
                              type='text'
                              size='lg'
                              placeholder=''
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
        </div>
    );
};

export default IngredientsForm;