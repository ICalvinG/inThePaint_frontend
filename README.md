# inThePaint_frontend

This Front End application lets users write articles about their favorite teams and then others can comment on that particular article. Users can also see that specific teams roster of players with various stats such as Name, Player Number, Postion, Height and Weight.

Two API's were used in the creation of this application, the first API grabs Team information from an external source along with their player information. Which is then saved to the Ruby on Rails Backend server. The second API makes an external call to get each players headshot if it exsists.

This application requires the Ruby on Rails Backend server which can be found here:
https://github.com/jmcolella/in-the-paint

Completed:

All components for teams
All components for players
All components for articles
All components comments
Most styling

Todo:

User Authentication
Team color styling

Future Iterations:

comments are votable by a user

Known bugs:

Editing a comment throws an error if trying to editing more than once per page load
