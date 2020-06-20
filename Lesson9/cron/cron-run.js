const cron = require('node-cron');
const calculateStatisticCrone = require('./calculldate-statistic.cron');

module.exports = () => {

    cron.schedule('30 * * * * *', async ()=>{
        console.log(`CRON JOB START AT ${new Date().toISOString()}`)
        try{
            await calculateStatisticCrone();
        }catch (e) {
            console.log(`CRON JOB FINISHED AT ${new Date().toISOString()} \n ${JSON.stringify(e, null,2)}`)
        }
        console.log(`CRON JOB FINISHED AT ${new Date().toISOString()}`)
    })

}