#include "SimplePocoHandler.h"
#include <iostream>

using AMQP::Connection;
using AMQP::Channel;
using AMQP::Message;
using AMQP::noack;
using AMQP::Login;
using std::string;
using std::cout;
using std::endl;

string first_queue = "first_queue";
string second_queue = "second_queue";
string msg = "String";

int main(int argc, char* argv[])
{
	SimplePocoHandler handler("localhost", 5672);

	Connection connection(&handler, Login("guest", "guest"), "/");
	Channel channel(&connection);

	channel.declareQueue(first_queue);
	
	channel.consume(first_queue, noack).onReceived([&](const Message &message, uint64_t deliveryTag, bool redelivered)
	{
			cout << " [x] Receive - " << message.message() << "      " << first_queue << endl;
		
			channel.onReady([&]()
			{
				if(handler.connected())
				{
					channel.publish("", second_queue, msg);
					cout << " [x] Sent    - " + msg + "  " + second_queue << endl << endl;
				}
			});
	});
	
	cout << endl << " [*] Waiting for messages " << endl << endl;
	
	handler.loop();	
    return 0;
}
