import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_INGREDIENTS } from '../../utils/mutations';
import Auth from '../../utils/auth';

const IngredientsForm = () => {
    const [ingredientFormData, setIngredientFormData] = useState({ ingredient: ''});

    const [ingredientInput, setIngredientInput] = useState('');

    const [validated] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const [addIngredients, { error, data }] = useMutation(ADD_INGREDIENTS);

    const handleInputChange = (event) => {
        const { ingredients, value } = event.target;
        setIngredientFormData({ ...ingredientFormData, [ingredients]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addIngredients({
                vaiables: { ...ingredientFormData }
            })

            Auth.login(data.addIngredients.token);
        }
        catch (err) {
            console.error(err);
        }

        setIngredientFormData({
            ingredient: ''
        });
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your ingredients.
                </Alert>

                <Form.Group>
                    <Form.Label htmlFor='ingredient'>Ingredient: </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your Ingredient'
                        name='ingredient'
                        onChange={handleInputChange}
                        value={ingredientFormData.ingredient}
                    />
                    <Form.Control.Feedback type='invalid'>Ingredient is required!</Form.Control.Feedback>
                </Form.Group>
                <Button
                    disabled={!(ingredientFormData.ingredient)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default IngredientsForm;