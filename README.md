<p align="center">
  <img width="150" height="150" src="https://github.com/jgphilpott/blackbox/blob/master/app/imgs/icon.png">
</p>

# Intro

blackbox is a project designed to simulate an airplane control system using a [Raspberry Pi](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) with a [Sense HAT](https://www.raspberrypi.org/products/sense-hat/). The Sense HAT is a Raspberry Pi add-on that was designed for the [Astro Pi Mission](https://astro-pi.org/about/mission/) and comes with six essential sensors for inertial measurement as well as a 8x8 LED matrix and a joystick.

**A video introduction is available [here]()**, but if you don't have the above mentioned hardware you won't be able to try this at home.. sorry :(

# Quick Start

Assuming you have the necessary hardware, clone this repository and navigate into the root directory. To make sure you have all the requirements installed run `pip3 install -r app/requirements.txt`. To start the app run `python3 app/root.py`. If everything worked, you should now be able to see the simulation when you visit `localhost:5000` in a web browser.

If you have any problems please open an [issue](https://github.com/jgphilpott/blackbox/issues), thanks :)
