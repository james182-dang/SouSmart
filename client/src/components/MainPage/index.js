import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../utils/auth';

const MainPage = () => {
    
    const [searchInput, setSearchInput] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }



    return (
        <>
          <Jumbotron >
            <Container>
                <h1>Main Page</h1>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Row>
                        <Col xs={12} md={8}>
                            <Form.Control
                              name='recipeSelection'
                              value={searchInput}
                              onChange={(e) => setSearchInput(e.target.vaue)}
                              type='text'
                              size='lg'
                              placeholder='Add ingredients here.'
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <Button type='submit' variant='success' size='lg'>
                                Submit
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
          </Jumbotron>
        </>
    );
};

export default MainPage;