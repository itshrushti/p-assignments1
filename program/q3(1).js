module.exports.ChatbotReply = function(message)
	{
		this.Bot_Age = 21;
		this.Bot_Name = "Shrushti's Bot";
		this.Bot_Country = "India";
		
		message= message.toLowerCase()

		if(message.indexOf("hi") > -1 || 
			message.indexOf("hello") > -1 || 
			message.indexOf("welcome") > -1 )
		{
			return "Hi!";
		} 
		else if( message.indexOf("age") > -1 || message.indexOf("what") && 
			message.indexOf("your"))
		{
			return "I'm " + this.Bot_Age;
		}
		
		else if (message.indexOf("how") > -1 && 
			message.indexOf("are") && 
			message.indexOf("you"))
		{
			return "I'm fine ^_^"
		}
		else if(message.indexOf("what") || message.indexOf("name") > -1 && 
			message.indexOf("your"))
		{
			return "I'm " + this.Bot_Name;
		}
		else if (message.indexOf("kem") > -1 || 
			message.indexOf("chho")>-1 && 
			message.indexOf("6o"))
		{
			return "Majama :)"
		}
		else if(message.indexOf("where") > -1 
			&& message.indexOf("live") && 
			message.indexOf("you"))
		{
			return "I live in " + this.Bot_Country;
		}
		return "Sorry, I didn't get it :( ";
	}