function scuberGreetingForFeet(feet){
  let answer;
  if (feet <= 400){
    answer = 'This one is on me!';
    return answer
  } else if (feet > 2000 && feet<=2500){
    answer = 'I will gladly take your thirty bucks.';
    return answer
  } else if ( feet > 2500){
    answer = 'No can do.';
    return answer
  }
}

function ternaryCheckCity(city){
return city === 'NYC' ?  'Ok, sounds good.':  'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
    return "Thank you so much.";
      break;
    case 'not as generous':
    return "Thank you.";
      break; 
    default:
    return "Bye.";
  }
}