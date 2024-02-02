# Sand Simulation with p5.js

This project is a sand simulation using the p5.js library, an animation library developed using the JavaScript programming language. The project draws inspiration from Cellular Automata, mathematical models that simulate discrete dynamic systems, where each element (cell) can assume a state from a finite set and change its state based on simple rules that depend on the states of neighboring cells.
<br>

## Introduction to Cellular Automata

Cellular Automata were proposed by mathematician John von Neumann in the 1950s as a way to study self-replicating systems and universal computation. They consist of a grid of cells, each with an initial state. At each time step, cells update their states according to a rule that takes into account the states of neighboring cells. This rule is applied uniformly and simultaneously to all cells. With this simplicity, Cellular Automata can generate complex and interesting behaviors, which can be used to model and understand various natural and computational phenomena.

A famous example of Cellular Automata is Conway’s Game of Life, created by mathematician John Conway in 1970. In this game, cells can be alive or dead, and the rule is as follows: a live cell stays alive if it has two or three live neighbors; otherwise, it dies. A dead cell becomes alive if it has exactly three live neighbors; otherwise, it remains dead. With this simple rule, surprising patterns such as stable forms, oscillations, or moving structures can be observed on the grid.

## About the Project

The goal of this project is to simulate the behavior of sand using a Cellular Automata. Sand is a granular material, composed of small and loose particles that move according to gravity and the friction forces between them. To model this phenomenon, we use a grid of square cells, each capable of being empty or occupied by a grain of sand. The rule is as follows: if an occupied cell has an empty cell below it, it swaps places with it; if not, it checks if there is an empty cell diagonally below to the left or right, and if so, it swaps places with it. This rule simulates the effect of gravity and friction between sand grains.

To implement this simulation, we use the p5.js library, which allows us to create interactive animations in the web browser. The p5.js library provides functions for drawing shapes, colors, images, texts, and capturing mouse and keyboard events. We use these functions to create the grid of cells, draw the sand grains, and enable the user to add sand with the mouse.

## Ok, but how we run this project?

To run this project you just need to do these simple steps:

1. Clone the project
```sh
    git clone https://github.com/DaniloNicacio/Sand-Simulation.git
```

2. Enter in project directory
```sh
    cd Sand-Simulator
```
3. Double click on [index.html](index.html)