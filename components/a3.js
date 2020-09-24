import React, { Component } from "react";

class news extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?country=th&category=business&apiKey=ad6868b099b840679186eaad7fe36930')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,

                })
            });
    }
    render() {

        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        return (
            <div className="App">
                <ul>
                    {items.articles.map(item => (
                        <div  >
                            <center>
                                <img src={item.urlToImage} width={400} height={250} alt="No Image" />
                            </center>

                            <li key={item.title}>

                                <a style={{ textDecoration: "none", color: "red", fontSize: 20 }} href={item.url} target="_blank" >
                                    {item.title}
                                </a>
                                <br /> <br />
                                <a >
                                    {item.description}
                                </a>

                            </li>
                            <br /> <br />
                       -----------------------------------------------------------------------------------------------------------------------------------------------------------
                        </div>

                    ))}
                </ul>
            </div>

        );
    }
}

export default news;
