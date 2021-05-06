const RabbitClient = require('./rabbit_client')

const rabbit = new RabbitClient()

const first_queue = "first_queue"
const second_queue = "second_queue"
const msg = "ID"

const execute = async () => 
{
	await rabbit.connect()
	rabbit.assertQueue(first_queue)
	rabbit.assertQueue(second_queue)
	
	rabbit.publish(first_queue,"ID")
	console.log("\n [x] Sent     - %s", msg, "     ", first_queue);
	
	rabbit.cosnume(second_queue,function(msg)
        { 
            console.log(" [x] Received - %s", msg.content.toString(), " ", second_queue, "\n");
        }
	)
}

execute()

//setInterval( async () => 
//{
//	await execute()
//}, 5000)
