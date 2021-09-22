// Code your solution in this file!

let setpoint=42;
let result;

function distanceFromHqInBlocks(block){
if (block>setpoint){
  result = block-setpoint;
} else if (block<setpoint){
  result = setpoint - block;
}
return result;
}
/*
function distanceFromHqInBlocks(block=43,block2=50,block3=34){
if(result<setpoint){
  result= setpoint-block3;
  return result;
  }

else if  (result= block-setpoint){
  return result;
}
else if(result= block2-setpoint){
return result;
}

}
*/

function distanceFromHqInFeet(block){
  if (block<setpoint){
    result=(setpoint-block)*264;
  }else if(block>setpoint){
    result=(block-setpoint)*264;
  }
return result;
}

function distanceTravelledInFeet(block,block2){
  if (block<block2){
    result=(block2-block)*264;
  }else if(block>block2){
    result=(block-block2  )*264;
  }
return result;
}

function calculatesFarePrice(start, destination){
  
 let distance = distanceTravelledInFeet(start, destination);
 console.log(distance)
  if (distance<400){
    return 0;
  }else if(distance >=400 && distance <=2000){
    return (distance-400)*0.02;
  
  }
  else if(distance >2000 && distance < 2500){
  return 25;
  }
  
  else if(distance>2500){
    return 'cannot travel that far';
  }
  
}

/*
function calculatesFarePrice(start, destination){
  const distanceTravelled = distanceTravelledInFeet(start, destination)

  if(distanceTravelled <= 400){
    return 0
  }else if (distanceTravelled >= 401 && distanceTravelled <=2000){
    return distanceTravelled * .02;
  }
    else if (distanceTravelled>2000 && distanceTravelled < 2500){
      return 25
    }
      else if (distanceTravelled > 2500){
        return "cannot tavel that far"
      }
    }
  
*/
