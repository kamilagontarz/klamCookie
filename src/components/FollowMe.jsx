import React from 'react';

class FollowMe extends React.Component {
    render() {
        return  <div className = "followMe"> obserwuj mnie! <br></br>
                    <div className = "followMeIcons">
                        <a href="http://www.facebook.com" className = "followMeIcon">
                            <i class="fab fa-facebook-f fa-2x"></i>
                        </a>
                        <a href="http://www.instagram.com" className = "followMeIcon">
                            <i class="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="http://www.youtube.com" className = "followMeIcon"> 
                            <i class="fab fa-youtube fa-2x"></i>
                        </a>
                        <a href="http://www.tumblr.com" className = "followMeIcon"> 
                            <i class="fab fa-tumblr fa-2x"></i>
                        </a>
                        <a href="http://www.pinterest.com" className = "followMeIcon"> 
                            <i class="fab fa-pinterest-p fa-2x"></i>
                        </a>
                    </div>
                </div>
        
    }
}

export default FollowMe;