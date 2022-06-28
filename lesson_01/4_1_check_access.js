const user = {
  age: 18,
  paid: true,
  blocked: false,
  badUsername: false,
  isAdmin: false
};

if (
  user.age >= 18 && 
  user.age <= 35 && 
  ( 
    user.paid && 
    !user.blocked &&
    !user.badUsername
    || 
    user.isAdmin 
  )
)
  console.log("granted");
else
  console.log("denied");
