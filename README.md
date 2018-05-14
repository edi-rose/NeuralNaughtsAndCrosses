At the point at which the network can securely improve in real time against the users
my plan will be to issue a 50$ for the last person to beat it. I think that's a pretty
cool idea.

Current State of App:

A user can now play against either a naughts or a crosses network which improves,
they play against it. The networks are saved to a Database as well as each of the board variations
and the users will then only play against the most trained networks.

Guide:

The Client folder holds the front end of the app and also holds the network folder
which is responsible for the calling, using, training and saving of the networks -
in that order. The networks are trained using the Brain.js module. It uses arrays of
numbers representing each board variation as it's inputs. It then shows that board to
a perfect naughts and crosses bot which I created in a previous project which returns
a number representing the square it has chosen to take, this is made to be the expected
output and is how the networks are trained. Note that the networks are trained on each
on each board after they try it live, so the changes will only come into affect the next
turn.

The Server folder is responsible for interacting with the SQL database using the Knex
library as well as holding the seeds and migrations for said DB. It contains get and
post requests for both networks as well as post requests for the board, which are all
saved but never requested by the front-end. I save them as I'm interested in how humans
play naughts and crosses.

The Database has three tables: boards, crossNetwork and naughtNetwork. The boards table
holds each variation of board that is played against the networks at each point of a game.
The crossNetwork and naughtNetwork tables hold each variation of the networks as they get
trained each turn.  

What's next?

Login/Signup,
New look and style,
A test suite that checks how well the networks play against all situations,
Heroku deployment,
Live statistics for users e.g: # of Games played,
More efficient trianing methods,
Get rid of duplicate boards in db,
Count of unique board variations in db.
