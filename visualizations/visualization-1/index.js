import React from "react";
 
import { AreaChart, LineChart, PieChart } from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading">
    <h1>Hello everyone</h1>
    <AreaChart
            accountId={4438274}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI3NHxJTkZSQXxOQXwyMTg0NjI4NDczMTI5NjYyODc5') TIMESERIES AUTO"
            fullWidth
          />
    <LineChart
            accountId={4438274}
            query="SELECT average(memoryUsedPercent) AS `Memory used %` FROM SystemSample WHERE (entityGuid = 'NDQzODI3NHxJTkZSQXxOQXwyMTg0NjI4NDczMTI5NjYyODc5') TIMESERIES AUTO"
            fullWidth
   
          />
     <PieChart
            accountId={4438274}
            query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI3NHxJTkZSQXxOQXwyMTg0NjI4NDczMTI5NjYyODc5') TIMESERIES AUTO"
            fullWidth
   
          />
     <AreaChart
            accountId={4438274}
            query="SELECT average(memoryUsedPercent) AS `Memory used %` FROM SystemSample WHERE (entityGuid = 'NDQzODI3NHxJTkZSQXxOQXwyMTg0NjI4NDczMTI5NjYyODc5') TIMESERIES AUTO"
            fullWidth
   
        />
    </div>
  );
};
 
export default index;