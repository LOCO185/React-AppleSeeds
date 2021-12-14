import React from "react";

class Color extends React.Component {
    state = { favouriteColor: "red"};
    componentDidMount = () => {
        setTimeout(() => {
            this.setState(() => ({favouriteColor: "blue"}));
        }, 1000);
    };

    componentDidUpdate = () => {
        console.log("update color !!");
    }
    render() {
        return (
            <div>
                <h1>My favourite color is red</h1>
                <h1>My favourite color is {this.state.favouriteColor}</h1>
            </div>
        );
    }
}

export default Color;

