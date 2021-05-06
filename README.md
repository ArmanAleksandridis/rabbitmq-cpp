# C++ code for RabbitMQ tutorials

## Requirements

* C++11 compiler support
* [POCO C++ Libraries](http://pocoproject.org)
* [CMake](http://www.cmake.org/)

  
On Debian/Ubuntu:

    sudo apt-get install cmake libpoco-dev

## Build
    
    git clone https://github.com/ArmanAleksandridis/rabbitmq-cpp.git
    cd rabbitmq-cpp
    cmake . .
    make
  
## Code
    
    cd src
    ./receive
    ./send [Frequency in microseconds]
    
