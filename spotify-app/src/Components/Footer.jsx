import React, { Component } from 'react'
import twitter from '../svgs/twitter.svg'
import linkedin from '../svgs/linkedin.svg'
import githubs from '../svgs/github.svg'
import fireBeats from '../svgs/fireBeats.svg'
import medium from '../svgs/medium.svg'


export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
               <a href ="https://github.com/malcolmc10"><img src={githubs}  /></a>
               <a href="https://twitter.com/Themalcolmmind"><img src={twitter} /></a>
               <a href ="https://www.linkedin.com/in/colinpmalcolm/"><img src={linkedin}  /></a>
               <a href ="https://open.spotify.com/user/1246577162?si=EOBK_y7_SseHbr2C7ByHYQ"><img src={fireBeats}  /></a>
               <a href ="https://medium.com/@colinmalcolm"><img src={medium}  /></a>

               <span>© 2020 Colin Malcolm</span>
               <span>This is a Spotify UI clone, icons by flaticons.com</span>
               
            </div>
        )
    }
}
