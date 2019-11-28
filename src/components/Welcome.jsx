import React from 'react';

class Welcome extends React.Component {
    render() {
        return <div>
                    <div className = "welcome">Witaj!</div> 
                    <img src = "/img/me.jpg" width="205px"></img>
                    <div className = "aboutMe">Jestem Kamila.
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Nullam ultrices neque 
                        sed turpis varius faucibus. Ut laoreet 
                        vestibulum orci, egestas mollis dui porta at.
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Nullam ultrices neque 
                        sed turpis varius faucibus. Ut laoreet 
                        vestibulum orci, egestas mollis dui porta at.</div>
               </div>
              
    }
}

export default Welcome;