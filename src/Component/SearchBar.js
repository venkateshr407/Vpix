import React from 'react';
import styled from 'styled-components';
import {Form, FormControl} from 'react-bootstrap';
import image from '../Images/search.jpg'


const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
    position: relative;
    background: url(${image})no-repeat fixed;
    background-size:cover;

    .landing-section{
        background-size:cover;
        z-index:-1;
        display:flex;
        align-items:center;
        justify-content:center;
        position:relative;
        margin:1rem;
    }
    .input{
        margin:1rem;
        background:transparent;
        color:white;
        width:60vw;
    }
    .input::placeholder{
        color:white;
    }
    `;
 
 const Text = styled.p`
    color:white;
    font-size:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 1rem 0rem 1rem;
`;
 const Paragraph = styled.p`
    color: white;
    font-size:16px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 1rem 0rem 1rem;
 `;
 class SearchBar extends React.Component{
    state = {team:''};
    
  onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.team); 
    }

    render(){
        return(
            <Container className="landing-section">
                    <Form className="form" onSubmit={this.onFormSubmit}>
                            <Text>Vpix
                            </Text>
                                <Paragraph className="para">Powered by : Unsplash API</Paragraph>
                            <div>
                                <FormControl
                                    className="input"
                                    style={{color:'white'}}
                                    type="text"
                                    value={this.state.team}
                                    placeholder="Search here"
                                    onChange={(e)=> this.setState({team:e.target.value})}
                                />
                            </div>

                    </Form>
            </Container>
            
        );
    }
}
export default SearchBar;