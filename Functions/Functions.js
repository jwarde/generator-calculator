function myFunction(p1, p2) {
     return p1 * p2;              // The function returns the product of p1 and p2
 }
 
function kWConvFunc(kVA) {
     return kVA * 0.8;              // Returns the kW  of the kVA
     // This is 0.8 of the generator within the fleet
 }
 
function kVAConvFunc(kW) {
     return kW / 0.8;              // Returns the kW  of the kVA
     // This is 0.8 divided by kW
 }
 
function threePHVoltFunc(_1PHVolt) {
     return _1PHVolt * 1.732;              // Returns the 3 Phase Voltage from the 1 Phase Voltage
     // This is 1.732 x 1 Phase Voltage
 }
 
/*function _1PHVoltFunc(_3PHVolt) {
     return _3PHVolt / 1 1.732;              // Returns the 1 Phase Voltage from the 3 Phase Voltage
     // This is 1.732 / 3 Phase Voltage
 }*/
 
function _1PHPowerFunc(_3PHPower) {
     return _3PHPower * 0.66;              // Returns the 1 Phase Power from the 3 Phase Power
     // This is 0.66 x 3 Phase Power
 }
 
 function _3PHPowerFunc(_1PHPower) {
     return _1PHPower / 0.66;              // Returns the 3 Phase Power from the 1 Phase Power
     // This is 0.66 / 1 Phase Power
 }
 
 function kVAFunc(Volts, Current) {
     return (Volts * Current * 1.732) / 1000;              // Returns the kVA from Voltage and Current
     // This is 0.8 divided by kW
 }
 
  function VoltFunc(kVA, Current) {
     return (kVA * 1000) / (Current * 1.732);              // Returns the Voltage from Current and kVA
     // This is kVA x 1000 / Current x 1.732
 }

