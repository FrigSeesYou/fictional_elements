elements.jublium = {
	color: "#FAE7AC",
	behavior: behaviors.GAS,
	category: "fictional"
	state: "gas",
	tempLow: -36,
	stateLow: "liquid_jublium",
	density: 0.198
}

elements.liquid_jublium = {
	color: "#F4D26C",
	behavior: behaviors.LIQUID,
	category: "fictional",
	hidden: true,
	state: "liquid",
	tempLow: -127,
	stateLow: "jublium_powder",
	tempHigh: -36,
	stateHigh: "jublium",
	density: 78
}

elements.jublium_powder = {
	color: "#F1C232",
	behavior: behaviours.POWDER,
	category: "fictional",
	hidden: true,
	state: "solid",
	tempHigh: -127,
	stateHigh: "liquid_jublium",
	density: 89
}