var members = [
	{	first: "Amanda",
		last: "Harris",
		age: 42,
		gender: "F",
		children: [{
				name: "Ben",
				age: 18,
				gender: "M" },
			{	name: "Lisa",
				Age: 15, 
				gender: "F" } ]			
	},
	{	first: "Brian",
		last: "Hall",
		age: 36,
		gender: "M",
		children: [{
				name: "Erica",
				age: 11,
				gender: "F" },
			{	name: "Jenny",
				age: 8,
				gender: "F"} ]
	},
	{	first: "Terrance",
		last: "Smith",
		age: 49,
		gender: "M",
		children: [{
				name: "David",
				age: 17,
				gender: "M" },
			{	name: "Alex",
				age: 23, 
				gender: "F" },	
			{	name: "Joe",
				age: 25, 
				gender: "M" } ]	
	},

	{	first: "Alyssa",
		last: "Ingram",
		age: 28,
		gender: "F",
		children: [{
				name: "Jamie",
				age: 3,
				gender: "F" },
			{	name: "Lori",
				age: 2, 
				gender: "F" } ]
	}
]


var x;

for (var x = 0; x < members.length; x++)
{
	members[x].children[members[x].children.length]= 
					{name: "Cindy",
					 age: 15, 
					 gender: "F"};

} 

for ( x = 0; x < members.length; x++)
{
	if (members[x].gender === "M")
		members[x].age += 5;
}



var totalAge = 0;
for ( x = 0; x < members.length; x++)
{
	totalAge = totalAge + members[x].age;
}

var currentChild;
console.log ("Average age: " + Math.floor(totalAge/members.length) );

totalAge = 0;
var childCount = 0;

var totalFemale = 0;
var femaleCount = 0;
for (x = 0; x < members.length; x++)
{
	for (y = 0; y < members[x].children.length; y++)
	{
		currentChild = members[x].children[y];
		console.log (currentChild.name + " (" + currentChild.age + ", ", currentChild.gender +")");
		if (currentChild.gender === "M")
		{
			totalAge += currentChild.age;
			childCount++;
		}
		if ( (currentChild.gender === "F") &&  (currentChild.age < 12) )
		{
			totalFemale += currentChild.age;
			femaleCount++;
		};

	}
}

console.log ("Avg. Age of Male Children: " + Math.floor (totalAge/childCount));
console.log ("Avg. Age of Females under 12: " + Math.floor (totalFemale/femaleCount));

