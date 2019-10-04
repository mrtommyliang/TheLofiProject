# The Lofi Project

## Project Description
Lofi music (otherwise known as lo-fidelity) has been integral to my productivity over the years and has been something I've been keeping up with for a very long time. Since about 2005, when an iconic series, titled Samurai Champloo came out, I was infatuated with the original soundtrack in the series, that were mostly composed my Nujabes, otherwise known as Jun Seba. Since then, this music genre has grown and evolved with many nods to older mediums including movies, music and shows. I wanted to build a website to show my appreciation to the genre, as well as the artists that are able to actively express themselves. This project is meant to be a place where anyone can go to find new music, or have songs recommended to them. As a developer, having a peace of mind while working and being to pour my absolute focus into my work is extremely important. I wanted to build a website where users can go to find music that can help relax and focus them.

![Readme Gif](https://melmagazine.com/wp-content/uploads/2018/08/1oW5-3epMX2BNg_dgbUqXjw.gif)

## User Story

> As a working professional, you are looking for a place to calm and center yourself in a loud and busy world. To focus and relax, you go to thelofiproject.com to find music that is able to help you stay calm and focused. Today, you are looking for music without lyrics. Upon entering the page, you login, and go to the daily mix and sort it by "No Lyrics". You sit back, and you start typing away.

## Technologies used

#### Front End

 - CSS
 - Javascript
 - React
 - React Router Dom

#### Back End

 - Active Record
 - Auth
 - BCrypt
 - Cors
 - Ruby on Rails

## Project Links

[Live Build](www.link.com)


## Wireframes
![Home](https://res.cloudinary.com/mrtommyliang/image/upload/v1570196282/The%20Lofi%20Project/IMG_8945_qcqzop.jpg)
![About](https://res.cloudinary.com/mrtommyliang/image/upload/v1570196282/The%20Lofi%20Project/Image_from_iOS_2_kfqbxb.jpg)
![Favorites](https://res.cloudinary.com/mrtommyliang/image/upload/v1570196282/The%20Lofi%20Project/Image_from_iOS_sjkhhp.jpg)

## ERD
![ERD](https://res.cloudinary.com/mrtommyliang/image/upload/v1570202115/The%20Lofi%20Project/Screen_Shot_2019-10-04_at_11.15.02_AM_h3gum4.png)

## MVP/Post MVP
### MVP

 - A functional frontend that translate backend information
 - A user is able to add favorites and view favorites
 - Full CRUD functionality 
	 - **Create**: Create user/add favorites
	 - **Read**: Visualize different songs on the page
	 - **Update**: Update user information
	 - **Delete**: Delete favorites

### Post MVP

 - A recommendation algorithm that returns a song depending on your current favorites
 - Upon entering the website, a user must type "I agree" to be allowed to proceed to the website (done using Konami code npm package)
 - A search function for songs

## Components
#### Component Description
|Component| Description  |
|--|--|
| Nav Bar | The `nav bar` will house and route the other components including Home, About, Favorites, Daily Mix, </> Mix, *~~Recommendations~~* |
| Search | The `search` component will allow the user to search for a song based off many options including Title, Artist, and Type(Lyrics, No Lyrics) |
| About | The `about` component will route the user to the about page where it will show images of artists that defined the genre as well as history of how the music came about.  |
| Songs Card | The `songs card` component will be how the cards are represented on the page. Each card will show the title of the song and the artist. |
| Favorites | The `favorites` component will display all of the users favorites|
| Daily Mix | The `daily mix` component will be a randomized list of `songs card`|
| </> Mix| The `</> mix` component will be a curated list of `songs card` defined by me|
| Easter Egg | The `easter egg` component will be a Post MVP feature |
| Recommendations | The `recommendations` component will display to the user a list of songs |

#### Component Timeline

| Component | Priority | Estimated Time| Actual Time
-|-|-|-
| Nav Bar | High | 3 hr | TBA
| Search | High | 2 hr | TBA
| About | High | 1.5 hr | TBA
| Songs Card | High | 2.5 hr | TBA
| Favorites | High | 3.5 hr | TBA
| Daily Mix | High | 2 hr | TBA
| </> Mix | High | 2 hr | TBA
| Easter Egg | High | 1.5 hr | TBA
| Recommendations | POST | 4 hr | TBA
| Total | N/A | 25 hr | 35 hr

## Code Snippet

``
Code Snippet Here
``

## Resources and Citations

 - Gif in readme from [here](https://melmagazine.com/en-us/story/teens-are-flocking-to-youtube-to-study)
 - Item 2
 - Item 3
 - Item 4
 - Item 5

## Issues

 - Issue 1
 - Issue 2
