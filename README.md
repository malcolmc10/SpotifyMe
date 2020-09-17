## SpotifyMe

SPotifyMe is a Spotify UI clone made to resemble the Spotify app as of September 2020.  This version of the Spotify UI has a few changes and features to make it my own and still keep the Spotify look and feel. 

#Deployed site: http://spotifyme.surge.sh
 
```
#MVP
I want to make the application that resembles the Spotify app as close as possible.
I will create objects that hold the playlists and use an API call to call upon that information to appear onto the Main Component.
I will add a zoom feature to the cards and make a custom color code for my project. 
I will structure my code with the means of professionaism. I will avoid dirty code and remove all console.logs and notes that are not required for those who read the code in the future.
I will use SCSS to create the look of my UI. 
Using React Router I will create a playlist page and link the home page to that specific page. 
```

#Goals
My goal is to create an application that will resemble the Spotify brand in my own way. My goal is to implement features into the Spotify UI that will diversify the responsiveness of the application for the user.


#Libraries
Library	Description

React Router -	Allows me to use router for my app.
SCSS - CSS for my project.


```
Component Hierarchy
src
|______
      |__ Components
              |__ App.js
              |__App.scss
              |__Categories.jsx
              |__Footer.jsx
              |__Main.jsx
              |__Nav.jsx
              |__Playlists.jsx
              |__pages
                  |__Playlist.jsx
              |__svgs
      ```

#### Component Breakdown



|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    App.js    | functional |   n   |   n   | _Holds basic information and layout of the application_          |
|  App.sccs       | functional |   n   |   n   | _Holds the CSS information for the components and elements    |
|   Categories     | functional |   y   |   n   | _Holds all the informations for the categories on the home page_                              |
|    Footer      | functional |   n   |   n   | _This component holds all of my social and contact information_.                      |
|    Main   | functional |   y   |   y   | _This component holds all the components and the relationships of those components.      |
|    Nav   | functional |   y   |   y   | _This component holds the side navigation bar.  |
|    Playlists | functional |   y   |   y   | _These components hold all of the playlists that will show on the Main page, and card make up    |
|    Playlist | functional |   y   |   y   | _This component shows the make of the  playlist page.    |

<br>

#### Component Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Side Navigation |    M     |     3 hrs      |      1hrs     |      1hrs      |
| Card           |    H     |     3 hrs      |      3hrs     |      3hrs      |
| playlist       |    H     |     5 hrs      |      5hrs     |      5hrs      |
| Object creation        |    H     |     4 hrs      |      1hrs     |      1 hrs     |
| SCSS   |    H     |     5 hrs      |      10hrs     |     10 hrs     |
| Footer    |    H     |     1 hrs      |      1hrs     |     1  hr      |
| Playlist CSS                 |    M     |     5 hrs      |      5hrs     |     5hr       |
| hover effects           |    H     |     2 hrs      |      2hrs     |     2hr        |
| debugging       |    H     |     1 hrs      |      5hrs     |     5hr      |
|     Categories      |    H     |     3 hrs      |      5hrs     |     5hrs      |
| TOTAL               |          |      hrs     |     hrs     |      hrs    |

<br>


<br>

### Post-MVP


```
-Create accurate search page with cards, colors, and music.
-link working profile with UI using Spotify API.
-Create Library with favorite music. 
-Create music controls panel
```

<br>

***

## Project Delivery

### Code Showcase



```
const matchedPlaylists = dataPlaylists.filter(playlist => playlist.category_id === props.category_id)

    return (
        
            <div className="cardsWrapInner">
                {matchedPlaylists.map((playlist, id) => (
                    <Link to={`/playlist/` + playlist.id}>
                    <div className="card" key={id} >
                        <div className="cardImage">
                            <img className="cardImage-background" src={playlist.img} />
                        </div>
                        <div className="cardContent">
                <h3>{playlist.name}</h3>
                            <span>{playlist.des}</span>

                        </div>
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                    </div>
                    </Link>
                ))}


                    </div>
        
    )
}
```

### Code Issues & Resolutions
```
> Some of the hover effects were not working properly and then I found out that it had more to do with my Div organization. Fixed it and it worked. 
> Some of the svgs would not change color using fill command. I had to edit the svg code and then the editing worked.
> The inital API call did not work right. I had to change some things around and I managed to get it working well.
> The hover effect of the play button was tough to get right. It kept falling off the card. I messed around with the scss and gave it a fixed position and it worked better.
```
