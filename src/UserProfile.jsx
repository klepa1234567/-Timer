import React, {Component} from 'react';

class UserProfile extends Component{
    state = {
        userData: null
    }

    componentDidMount() {
        this.fetchUserData(this.props.userId);
    }

    fetchUserData = (userId) => {
        const userUrl = `https://api.github.com/users/${userId}`
        fetch(userUrl)
            .then(responce => {
                return responce.json()
            })
            .then(userData => {
                console.log(userData)
                this.setState({
                    userData,
                });
            });
    };

    render() {
        console.log(this)
        if(!this.state.userData){
            return null;
        }
        const {name, location, avatar_url} = this.state.userData
        return (
            <div className="user">
                <img alt="User Avatar" src={avatar_url}/>
                <div className="user_info">
                    <span className="user_name">{name}</span>
                    <span className="user_location">{location}</span>
                </div>
            </div>
        );
    };
};

export default UserProfile;