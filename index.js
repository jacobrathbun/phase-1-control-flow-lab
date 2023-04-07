//function for distance greeting
function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return 'This one is on me!';
  }
  else if (distance >= 401 && distance < 2000){
    return 'That will be twenty bucks.';
  }
  else if (distance > 2000 && distance <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500){
    return 'No can do.';
  }
}

//function for ternary city check
function ternaryCheckCity(city){
  const cityMessage = city == 'NYC' ? 'Ok, sounds good.' : 'No go.'  
  return cityMessage;
}

//function for case switch tip response
function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}