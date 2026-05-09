function maxProfit(prices: number[]): number {

    let price = Infinity;
    
    let profit = 0;

    for ( let i = 0; i < prices.length; i++ ) {

        profit = Math.max( profit, prices[i] - price );

        price = Math.min( price, prices[i] );

    }

    return profit;

};