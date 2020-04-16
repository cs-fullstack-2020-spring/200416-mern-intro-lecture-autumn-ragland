import React, {Component} from 'react';

class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : "",
            yearReleased : 0,
            movieArray : [],
        }
    }

    componentDidMount = () => {
        // this.state.movieArray.push({
        //     title : "Bugs Life",
        //     yearReleased : 2000
        // });

        // this.state.movieArray.push({
        //     title : "Antz",
        //     yearReleased : 2010
        // });

        // this.setState({movieArray : this.state.movieArray});
        this.loadData();
    }

    loadData = async () => {
        let response = await fetch('/api');
        let json = await response.json();
        console.log(json);
        this.setState({movieArray : json});
    }

    handleChange = (event) => {
        if(event.target.name === "title"){
            this.setState({title : event.target.value});
        } else if(event.target.name === "yearReleased"){
            this.setState({yearReleased : event.target.value});
        }
    }

    handleSubmission = async (event) => {
        event.preventDefault();
        let formData = {
            title : this.state.title,
            yearReleased : this.state.yearReleased
        }
        let response = await fetch('/api', {
            method : "POST",
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(formData)
        });
        let json = await response.json();
        // console.log(json);
        // console.log(this.state);
    }

    render () {
        return(
            <div>
                <h1>Simple MERN App</h1>
                <form>
                    <label htmlFor="title"> Movie Title</label>
                    <input type="text" name = "title" value = {this.state.title} onChange = {this.handleChange}/>

                    <label htmlFor="yearReleased"> Movie Year Released</label>
                    <input type="number" name = "yearReleased" value = {this.state.yearReleased} onChange = {this.handleChange}/>

                    <button onClick = {this.handleSubmission}>Add Movie</button>
                </form>
                <div>
                    {
                        this.state.movieArray.map((movie, index) => {
                            return(
                                <div key = {movie._id}>
                                    Title : {movie.title}
                                    <br/>
                                    Year : {movie.yearReleased}
                                    <hr/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default AppContainer