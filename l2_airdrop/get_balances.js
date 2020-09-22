const fs = require('fs');
const path = require('path');
const snxData = require('synthetix-data');

const JSON_OUTPUT = 'snxStakers2500.json';

// max needs to be a very big number, the only way to solve this is to edit synthetix-data and deactivate the default value or use ascending order
snxData.snx.holders({ max: 25000 }).then(holders => {
	const newHolders = holders
		.filter(({ collateral }) => collateral <= 2500 && collateral >= 1)
		.map(({ address, collateral }) => ({
			address: address,
			collateral: collateral,
		}));
	console.log(newHolders.length);
	fs.writeFile(JSON_OUTPUT, JSON.stringify(newHolders), 'utf8', err => {
		if (err) {
			console.log('An error occured while writing JSON Object to File.');
			return console.log(err);
		}

		console.log('Stakers eligible for L2 airdop stored in snxStaker2500.json.');
	});
});

// fs.readFile(JSON_OUTPUT, (err, data) => {
// 	if (err) throw err;
// 	const stakers = JSON.parse(data);
// 	stakers.forEach(staker => {
// 		console.log(staker.address);
// 	});
// });
