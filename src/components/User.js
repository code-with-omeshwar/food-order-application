import React, { use } from "react"

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            location: "",
            userInfo: ""
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/code-with-omeshwar");
        const json = await data.json()
        this.setState({
            userInfo: json
        })
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        console.log(this.state.userInfo);

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <img src={avatar_url} alt="" />
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                >Increase</button>
            </div>
        )
    }
}

export default User;