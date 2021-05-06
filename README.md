# C++ and Node.js code for RabbitMQ

## Requirements

* C++11 compiler support
* Node.js + amqp
* [POCO C++ Libraries](http://pocoproject.org)
* [CMake](http://www.cmake.org/)

  
On Debian/Ubuntu:

    sudo apt-get install cmake libpoco-dev
    npm install amqplib

## Build
    
    git clone https://github.com/ArmanAleksandridis/rabbitmq-cpp.git
    cd rabbitmq-cpp
    cmake . .
    make
  
## Code
    
    cd src
    ./receive
    node main.js
