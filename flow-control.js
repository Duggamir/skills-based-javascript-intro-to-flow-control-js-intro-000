function basicTeenager(age) {
  if (age >= 13 && age <= 19)
  {
    return "You are a teenager!";
  }
}

function teenager(age) {
  basicTeenager(age);
  return "You are not a teenager";
}

function ageChecker(age) {
  basicTeenager(age);
  if (age >= 12)
  {
    return 'You are a kid';
  }
  else {
    {
      return 'You are a grownup';
    }
  }
}

function ternaryTeenager(age) {
  teenager(age);
}

function switchAge(age) {
  basicTeenager(age);
  return 'You have an age';
}
