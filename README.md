Hello and welcome to my Naughts and Crosses Neural Network (WIP)
I am currently able to make reccomendations based on the networks output but it,
is not particularly accurate. I need to build in the rules of naughts and crosses
into the nets logic.

Goals for this project:
1.Have a user play against the network
2.Have the network learn from it's previous games
Make it work as naughts or crosses.

I am using the naughts and crosses bot from a previous project to
train a neural network to play the great game. I will be using the brain.js module.

In Bots folder you'll find the code for my bot which I am using to collect the
correct outputs.

In boardStuff folder you'll find how I am randomizing my boards to have as inputs.

The helpers folder helps me turn all that into a format brain.js can tolerate
with the final creation of data being done in the 'assembleData' file.

Current state:

The network can now play as either naughts or crosses and plays fairly well.
Makes many mistakes but the training has gone well all things considered.

My next goal is too make is so that it learns as the user plays against it. This
will mean creating a database which will hold the network and then have it be trained
through a stream. This is a real challenge. 
