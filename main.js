const main = async () => {

    // Load JSON data
    const httpResponse = await fetch('json_award.json')
    const nobelDatas = await httpResponse.json()

    // Make labels and data
    const labels = []
    const awardedAmount = []
    const adjustedAdjusted = []
    for(const nobelData of nobelDatas) {
        labels.push(nobelData.awardYear)
        awardedAmount.push(nobelData.prizeAmount)
        adjustedAdjusted.push(nobelData.prizeAmountAdjusted)
    }

    // Make chart
    const ctx = document.getElementById('myChart').getContext('2d')
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '$ Awarded Amount',
                data: awardedAmount,
                    backgroundColor: [
                        'rgba(174, 0, 1)'
                    ]
            },{
                label: '$ Adjusted Amount',
                data: adjustedAdjusted,
                    backgroundColor: [
                        'rgba(0, 0, 0)'
                    ]
            }]
        }
    })

}
main()