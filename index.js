// Code your solution in this file!
//let hqLocation = 42

//let destinationLocation =

function distanceFromHqInBlocks (pickupLocation = 50) {
    let hq = 42
    if (pickupLocation < 42) {
        return hq - pickupLocation
    } else {
        return pickupLocation - hq
    }
}
//return distance in blocks x2
// calculate distances below 42nd

 function distanceFromHqInFeet (pickupLocation) {
     return distanceFromHqInBlocks(pickupLocation) * 264
 }


function distanceTravelledInFeet (pickupLocation, dropoffLocation) {
    if (pickupLocation > dropoffLocation) {
        return (pickupLocation - dropoffLocation) * 264
    } else {
        return (dropoffLocation - pickupLocation) * 264
    }
}

function calculatesFarePrice (pickupLocation, dropoffLocation) {
    if (distanceTravelledInFeet(pickupLocation, dropoffLocation) < 400) {
        return 0
    } else if (distanceTravelledInFeet(pickupLocation, dropoffLocation) > 400 && distanceTravelledInFeet(pickupLocation, dropoffLocation) < 2000) {
        return (distanceTravelledInFeet(pickupLocation, dropoffLocation) - 400) * 0.02
    //     return (distanceTravelledInFeet * 2)
    } else if (distanceTravelledInFeet(pickupLocation, dropoffLocation) < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
    //DISTANCE-400 < 400 rtn free
    //400<distance<2000
}


//HQ 42nd Street, number value 42
//returns distance from hq in blocks, eg, 50th st (nval=50) blockdistance = 1
// distanceFromHqInFeet should multiply value of distance frm hq in blocks * 264 (ft per block)
//jkl