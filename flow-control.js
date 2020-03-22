function basicTeenager(age) {
  if (age >= 13 && age <= 19)
  {
    return "You are a teenager!"
  }
}

function teenager(age) {
  basicTeenager()
  return "You are not a teenager"
}

function ageChecker(age) {
  basicTeenager()
  if (age >= 12)
  {
    return 'You Are a kid'
  }
  else {
    {
      return 'You are a grownup'
    }
  }
}

function ternaryTeenager(age) {
  teenager()
}

function switchAge(age) {
  basicTeenager()
  return 'You have an age'
}
