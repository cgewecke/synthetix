const snxData = require('synthetix-data'); // common js

snxData.snx.holders({ max: 10 }).then(holders => {
	const newHolders = holders
		.filter(({ collateral }) => collateral <= 2500 && collateral >= 1)
		.map(({ address, collateral }) => ({
			address: address,
			collateral: collateral,
		}));
	console.log(newHolders);
});
