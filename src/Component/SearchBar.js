import React from 'react';
import styled from 'styled-components';
import {Form, FormControl} from 'react-bootstrap';
import image from '../Images/search.jpg';


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
        margin:1.5rem 0 0 0;
        color:black;
        width:100%;
    }
    .input::placeholder{
        color:black;
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


const Scroll =  styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:5rem;
    color:#fff;
    background-color:#0000;
`
const SearchResult =  styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2rem;
    text-transform:uppercase;
    color:#fff;
    padding-left:2rem;
    background-color: rgb(14, 13, 13);
`


 class SearchBar extends React.Component{
    state = {team:''};
    state = {name:'Scroll Down'};
    
  onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.team);   
        }
    onFormLoad = (e) => {
        e.preventDefault();
        document.write(this.state.name);
    }

    render(){
        return(
            <React.Fragment>
                <Container className="landing-section ">
                    <Form className="form bg-transparent" onSubmit={this.onFormSubmit}>
                            <Text className="bg-transparent">vpix
                            </Text>
                                <Paragraph className="para bg-transparent">Powered by : Unsplash API</Paragraph>
                            <div>
                                <FormControl
                                    className="input"
                                    style={{color:'black'}}
                                    type="text"
                                    value={this.state.team}
                                    placeholder="Search here"
                                    onChange={(e)=> this.setState({team:e.target.value})}
                                />
                            </div>
                        <Scroll>{this.state.name}</Scroll>
                    </Form>  
            
                </Container>
                <SearchResult>{this.state.team}</SearchResult>
                
            </React.Fragment>
            
        );
    }
}
export default SearchBar;