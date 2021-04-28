import React from 'react';
import MemesComponent from './MemesComponent'
class MemesContainer extends React.Component {
    state = {
        topText: "",
        bottomText: "",
        img: "https://i.imgflip.com/9ehk.jpg",
        memesImages: []
    };
    /*constructor() {
        super();
        this.state = {
            topText: "top text",
            bottomText: "bottom text",
            img: "https://cdn6.aptoide.com/imgs/0/e/9/0e9087f58590a921336cd0faf37fbcfb_icon.png",
            memesImages: []
        };
    }*/

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data;
                console.log(memes)
                this.setState({
                    memesImages: memes
                })
            })
    }

    hundleChange = (event) => {
        const { value, name, type, checked } = event.target;
        type === "checkbox" ?
            this.setState({ [name]: checked }) :
            this.setState({ [name]: value })
    }

    hundleSubmit = (event) => {
        event.preventDefault();
        let list = this.state.memesImages
        var index = Math.floor(Math.random() * list.length);
        var imageRandom = list[index].url
        this.setState({
            img: imageRandom
        })
    }
    render() {
        return (
            <MemesComponent
                state={this.state}
                hundleChange={this.hundleChange}
                hundleSubmit={this.hundleSubmit}
            />
        )
    }
}
export default MemesContainer