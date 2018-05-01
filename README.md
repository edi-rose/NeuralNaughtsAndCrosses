
Current state:

The network can now play as either naughts or crosses and plays fairly well.
Makes many mistakes but the training has gone well all things considered.

My next goal is too make is so that it learns as the user plays against it. This
will mean creating a database which will hold the network and then have it be trained
through a stream. This is a real challenge.

Steps:

1. To train a network live I will have too:
     --> Get the board state after each turn (done)
     --> turn it into a string of an array nine numbers '1, -1, 0, 0, 1, -1, 1, 1, 0' (done)
     --> send it to the API
     --> send it to the Database
     --> Every time something is added to the database take it on the backend
     --> turn it back into an array
     --> train the network off of the new array

How to use?

You can currently play against my networks by cloning this repo and running it on local host.

In trainer.js you can train a new network. The best way I found to use it is to
console.log it at a json and then copy it into a new file which you can then call
in the network.js file.

Training the network will involve choosing how many boards to create for it
and how many iterations do train it over. To choose the amount of boards you wish
to train your network on simply enter it as a parameter in the makeBoards function
in assembleData. To change the amount of times you want your network to train over
the data go into the trainer.js and adjust the iterations number.


What next?

I am currently thinking of ways to have a user train the network while playing
against it. This will involve using a Database of which there currently is none.
It will also mean creating a stream in which the games are saved and send through
a pipeline which then formats it as input and output data and trains the network
with it.
