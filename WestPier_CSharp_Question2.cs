using System;
using System.Collections.Generic;

public class Player
{
	private List<string> inventory = new List<string>();

	public Player(List<string> items) {
		inventory = items;
	}

	public List<string> GetItems() { 
		return inventory;
	}
	
	public static void Main()
	{			
		// Jack has a potion and a sword
		var jacksItems = new List<string>();
		jacksItems.Add("potion");
		jacksItems.Add("sword");
		var jack = new Player(jacksItems);

		// Jill has all the same items as Jack, plus a helmet /* WORKING SOLUTION */
		var jillsItems = new List<string>(jack.GetItems()); // jack.GetItems();
		var jill = new Player(jillsItems);
		Console.WriteLine("JACK'S ITEMS:");
		jacksItems.ForEach(Console.WriteLine);
			
		Console.WriteLine(" ");
		
		jillsItems.Add("helmet");
		Console.WriteLine("JILL'S ITEMS:");
		jillsItems.ForEach(Console.WriteLine);
		Console.WriteLine(" ");
		Console.WriteLine("JACK'S ITEMS:");
		jacksItems.ForEach(Console.WriteLine);
		Console.WriteLine(" ");
		Console.WriteLine("JILL'S ITEMS:");
		jillsItems.ForEach(Console.WriteLine);
		jacksItems.Add("buckler");
		Console.WriteLine(" ");
		Console.WriteLine("JILL'S ITEMS:");
		jillsItems.ForEach(Console.WriteLine);
		Console.WriteLine(" ");
		Console.WriteLine("JACK'S ITEMS:");
		jacksItems.ForEach(Console.WriteLine);
		Console.WriteLine(" ");
		jacksItems.Add("Boots");
		jillsItems.Add("Crown");
		Console.WriteLine("JILL'S ITEMS:");
		jillsItems.ForEach(Console.WriteLine);
		Console.WriteLine(" ");
		Console.WriteLine("JACK'S ITEMS:");
		jacksItems.ForEach(Console.WriteLine);
		Console.WriteLine(" ");	
	}
}