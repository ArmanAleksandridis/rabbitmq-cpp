#!/usr/bin/env node

const amqp = require('amqplib');

class RabbitClient 
{
	async connect()
	{
		this.connection = await amqp.connect('amqp://localhost')
		this.channel = await this.connection.createChannel()
	}

	assertQueue(queue)
	{
		this.channel.assertQueue(queue, 
        {
            durable: false
        });
	}
	
	publish(queue,msg)
	{
		this.channel.sendToQueue(queue, Buffer.from(msg))
	}
	
	cosnume(queue, callback)
	{
		this.channel.consume(queue, callback, 
        {
            noAck: true
        });
	}
}

module.exports = RabbitClient
