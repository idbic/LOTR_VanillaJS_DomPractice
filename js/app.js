console.log('we are here')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth	
	const midEarth = document.createElement('section')
	midEarth.setAttribute('id', 'middle-earth');
	// midEarth.innerText = "hello world"


	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++) {
		if (i === 0) {
			let shire = document.createElement('article');
			shire.setAttribute('id', 'the-shire');
			midEarth.appendChild(shire);
			shire.innerHTML = "<h1>The Shire</h1>"
			console.log(shire)
		} else if (i === 1) {
			let rivendell = document.createElement('article');
			rivendell.setAttribute('id', 'rivendell');
			midEarth.appendChild(rivendell);
			rivendell.innerHTML = "<h1>Rivendell</h1>"
			console.log(rivendell)
		} else if (i === 2) {
			let mordor = document.createElement('article');
			mordor.setAttribute('id', 'mordor');
			midEarth.appendChild(mordor);
			mordor.innerHTML = "<h1>Mordor</h1>"
			console.log(mordor)
		}

	}
	document.body.appendChild(midEarth)

}
makeMiddleEarth()


//   2a. creates an article tag (there should be one for each land when the loop is done)

//   2b. gives each land article an `id` tag of the corresponding land name

//   2c. includes an h1 with the name of the land inside each land article

//   2d. appends each land to the middle-earth section

// 3. append the section to the body of the DOM.


// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	let allHobbits = document.createElement('ul');
	allHobbits.setAttribute('id', 'allHobbits')



	for (let i = 0; i < hobbits.length; i++) {
		if (i === 0) {
			frodo = document.createElement('li');
			frodo.setAttribute('class', 'hobbit');
			frodo.setAttribute('id', 'frodo')
			frodo.innerText = 'Frodo Baggins'
			console.log(frodo)
			// allHobbits.appendChild(hobbitsLI)
			// hobbits.textContent = `Frodo Baggins`
			// document.getElementById('the-shire').appendChild(hobbitsLI)
		} else if (i === 1) {
			sam = document.createElement('li');
			sam.setAttribute('class', 'hobbit');
			sam.innerText = `Samwise "Sam" Gamgee`
			console.log(sam)
		} else if (i === 2) {
			merry = document.createElement('li');
			merry.setAttribute('class', 'hobbit');
			merry.innerText = `Meriadoc "Merry" Brandybuck`
			console.log(merry)
		} else if (i === 3) {

			pere = document.createElement('li');
			pere.setAttribute('class', 'hobbit');
			pere.innerText = `Peregrin "Pippin" Took`
			console.log(pere)
		}


	}

	document.getElementById('the-shire').append(allHobbits)
	allHobbits.append(frodo);
	allHobbits.append(sam);
	allHobbits.append(merry);
	allHobbits.append(pere);

	// display an `unordered list` of hobbits in the shire

	// give each hobbit a class of `hobbit`

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

makeHobbits()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	let theRing = document.createElement('div')
	// give the div a class of `'magic-imbued-jewelry'`
	theRing.setAttribute('id', 'the-ring')
	// add the ring as a child of `Frodo`

	frodo.append(theRing)
}

keepItSecretKeepItSafe()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	let theBaddies = document.createElement('ul')

	for (let i = 0; i < baddies.length; i++) {

		let newBad = baddies[i]
		let baddyString = baddies[i].toString()
		console.log(newBad)
		newBad = document.createElement('li')
		newBad.setAttribute('class', 'baddy');
	
		newBad.innerText = baddyString
		theBaddies.appendChild(newBad)
		console.log(newBad)
	}mordor.appendChild(theBaddies)
}
makeBaddies()
// display an unordered list of baddies in Mordor
// 	let baddies = document.createElement('ul')
// 	//'Sauron', 'Saruman', 'The Uruk-hai', 'Orcs'
// 	// give each of the baddies a class of "baddy"
// 	let li1 = document.createElement('li')
// 	li1.setAttribute('class', 'baddies')
// 	li1.innerText = 'Sauron'
// 	let li2 = document.createElement('li')
// 	li2.setAttribute('class', 'baddies')
// 	li2.innerText = 'Saruman'
// 	let li3 = document.createElement('li')
// 	li3.setAttribute('class', 'baddies')
// 	li3.innerText = 'The Uruk-hai'
// 	let li4 = document.createElement('li')
// 	li4.setAttribute('class', 'baddies')
// 	li4.innerText = 'Orcs'
// 	// let li2 = document.createElement('li').setAttribute('class', 'baddies')
// 	// let li3 = document.createElement('li').setAttribute('class', 'baddies')
// baddies.append(li1)
// baddies.append(li2)
// baddies.append(li3)
// baddies.append(li4)
// console.log(li1)
// 	// remember to append them to Mordor
// 	mordor.append(baddies)

// baddies.appendChild(li2)
// baddies.appendChild(li3)


// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')
let theBuddies = document.createElement('aside')
theBuddies.setAttribute('id', 'buddyaside')

	for (let i = 0; i < buddies.length; i++) {

		let newBud = buddies[i]
		let buddyString = buddies[i].toString()
		console.log(newBud)
		newBud = document.createElement('li')
		newBud.setAttribute('class', 'buddy');
	
		newBud.innerText = buddyString
		theBuddies.appendChild(newBud)
		console.log(newBud)
		if(i === 0) {
			newBud.setAttribute('id', 'gandalfwhite')
		}else if (i === 3) {
		// let newBud = buddies[i]
		// let buddyString = buddies[i].toString()
		// console.log(newBud)
		// newBud = document.createElement('li')
		newBud.setAttribute('class', 'buddy');
		newBud.setAttribute('id', 'aragorn')	
		// newBud.innerText = buddyString
		// theBuddies.appendChild(newBud)
		// console.log(newBud)
		} else if (i === 4) {
			newBud.setAttribute('class', 'buddy');
			newBud.setAttribute('id', 'boromir')

		}
	}rivendell.appendChild(theBuddies)
}
makeBuddies()
// 	// create an `aside` tag
// 	let buddyContainer = document.createElement('aside')
// 	let buddies = document.createElement('ul')
// 	buddyContainer.append(buddies)
// 	let bud1 = document.createElement('li')
// 	let bud2 = document.createElement('li')
// 	let bud3 = document.createElement('li')
// 	let bud4 = document.createElement('li')
// 	bud4.setAttribute('id', 'Strider')
// 	let bud5 = document.createElement('li')
// 	bud1.setAttribute('class', 'buddies')
// 	bud2.setAttribute('class', 'buddies') //'Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir
// 	bud3.setAttribute('class', 'buddies')
// 	bud4.setAttribute('class', 'buddies')
// 	bud5.setAttribute('class', 'buddies')
// 	bud1.innerText = 'Gandalf'
// 	bud2.innerText = 'Legolas'
// 	bud3.innerText = 'Gimli'
// 	bud4.innerText = 'Aragorn'
// 	bud5.innerText = 'Boromir'
// 	buddies.append(bud1)
// 	buddies.append(bud2)
// 	buddies.append(bud3)
// 	buddies.append(bud4)
// 	buddies.append(bud5)
// 	rivendell.append(buddyContainer)
// put an `unordered list` of the `'buddies'` in the aside

// insert your aside as a child element of `rivendell`
// }
// makeBuddies()
// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	let moveRiven = document.getElementById('allHobbits')
	rivendell.appendChild(moveRiven)
	

	// assemble the `hobbits` and move them to `rivendell`
}
leaveTheShire()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	// change the `'Strider'` text to `'Aragorn'`
	// for (let i = 0; i < buddies.length; i++) {
	// 	if(i === 3) {
	// 		buddies.splice(3, 1, 'Aragorn')

	
	// 	}
	// }
	buddies.splice(3, 1, "aragorn")
	console.log(buddies)
	let aragorn = document.getElementById('aragorn')
	aragorn.innerHTML = 'Aragorn'
}
beautifulStranger()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
// 	// create a new div called `'the-fellowship'` within `rivendell`
// 	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// 	// after each character is added make an alert that they // have joined your party
	let fellowship = document.createElement('div') 
	fellowship.setAttribute('class', 'the-fellowship')

	for(let i = 0; i < hobbits.length; i++) {
		if(i === 0) {  
		let fellowFrod = document.createElement('li');
		// fellowFrod.setAttribute('class', 'hobbits');
		fellowFrod.setAttribute('id', 'fellowFrodo')
		fellowship.appendChild(fellowFrod)
		console.log(fellowship)
		
	}else if(i === 1) {
		let fellowSam = document.createElement('li');
		// fellowSam.setAttribute('class', 'hobbits');
		fellowSam.setAttribute('id', 'fellowSam')
		fellowship.appendChild(fellowSam);
		console.log(fellowSam)
		
	} else if(i === 2) {
		let fellowMerry = document.createElement('li')
		fellowMerry.setAttribute('id', 'fellowMerry')
		fellowship.appendChild(fellowMerry)
		
	} else if(i === 3) {
		let fellowPere = document.createElement('li')
		fellowPere.setAttribute('id', 'fellowPere')
		fellowship.appendChild(fellowPere)
		

	}
	console.log(fellowship)
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}
for(let i = 0; i < buddies.length; i++){
	if ( i === 0 ){
		let budGan = document.createElement('li')
		budGan.setAttribute('id', 'fellowGandalf')
		fellowship.appendChild(budGan)
		
	} else if( i === 1){
		let budLego = document.createElement('li')
		budLego.setAttribute('id', 'fellowLegolas')
		fellowship.appendChild(budLego)
	
	} else if( i === 2) {
		let budGimli = document.createElement('li')
		budGimli.setAttribute('id', 'fellowGimli')
		fellowship.appendChild(budGimli)
	
	} else if (i === 3) {
		let budAragorn = document.createElement('li')
		budAragorn.setAttribute('id', 'fellowAragorn')
		fellowship.appendChild(budAragorn)
		
	} else if (i === 4) {
		let budBoro = document.createElement('li')
		budBoro.setAttribute('id', 'fellowBoromir')
		fellowship.appendChild(budBoro)
		
	}
} rivendell.appendChild(fellowship)
window.alert('buddies added to the fellowship')
window.alert('hobbits added to fellowship')
console.log(fellowship)
}
forgeTheFellowShip()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9const hobbits = [
// 	`Frodo Baggins`,
// 	`Samwise "Sam" Gamgee`,
// 	`Meriadoc "Merry" Brandybuck`,
// 	`Peregrin "Pippin" Took`,
// ]

// const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

// const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

// const lands = ['The-Shire', 'Rivendell', 'Mordor']
// ============

function theBalrog() {
	console.log('9: theBalrog')
 	let ganWhite = document.getElementById('gandalfwhite')
	 ganWhite.innerHTML = "Gandalf the White"
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border
}
theBalrog()
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	window.alert('horn of gondor had been blown')
buddies.pop()
document.getElementById('boromir').remove()
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
}
hornOfGondor()
// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
	let mountdoom = document.createElement('div')
	mountdoom.setAttribute('id', 'mount-doom')
	let mordivul = document.createElement('ul')
	let mordor1 = document.getElementById('mordor')
	let youngFrodo = document.getElementById('id', 'fellowFrodo')
	let youngSam = document.getElementById('id', 'fellowSam')
	
	mordor1.appendChild(mountdoom)
	mountdoom.appendChild(document.getElementById('fellowFrodo'))
	mountdoom.appendChild(document.getElementById('fellowSam'))
	
}

itsDangerousToGoAlone()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
	let gollum = document.createElement('div')
	gollum.setAttribute('id', 'gollum')
	document.getElementById('mount-doom').appendChild(gollum)
	gollum.appendChild(document.getElementById('the-ring'))

}
weWantsIt()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	let byeGollum = document.getElementById('gollum')
	byeGollum.remove()
	console.log('hello')

	let myHobbs = document.getElementById('allHobbits')
	console.log(myHobbs)
	let datShire = document.getElementById('the-shire')
	console.log(datShire)
	datShire.appendChild(myHobbs)

	
	
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
}
thereAndBackAgain()
// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

// document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
// document.getElementById('chapter-2').addEventListener('click', makeHobbits)
// document
// 	.getElementById('chapter-3')
// 	.addEventListener('click', keepItSecretKeepItSafe)
// document.getElementById('chapter-4').addEventListener('click', makeBaddies)
// document.getElementById('chapter-5').addEventListener('click', makeBuddies)
// document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
// document
// 	.getElementById('chapter-7')
// 	.addEventListener('click', beautifulStranger)
// document
// 	.getElementById('chapter-8')
// 	.addEventListener('click', forgeTheFellowShip)
// document.getElementById('chapter-9').addEventListener('click', theBalrog)
// document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
// document
// 	.getElementById('chapter-11')
// 	.addEventListener('click', itsDangerousToGoAlone)
// document.getElementById('chapter-12').addEventListener('click', weWantsIt)
// document
// 	.getElementById('chapter-13')
// 	.addEventListener('click', thereAndBackAgain)
// document.getElementById('all-chapters').addEventListener('click', () => {
// 	makeMiddleEarth()
// 	makeHobbits()
// 	keepItSecretKeepItSafe()
// 	makeBaddies()
// 	makeBuddies()
// 	leaveTheShire()
// 	beautifulStranger()
// 	forgeTheFellowShip()
// 	theBalrog()
// 	hornOfGondor()
// 	itsDangerousToGoAlone()
// 	weWantsIt()
// 	thereAndBackAgain()
// })
