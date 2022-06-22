const user = {
  age: 18,
  paid: true,
  blocked: false,
  badUsername: false,
  isAdmin: false
};

console.log(
  (
    user.age >= 18
    && user.age <= 35
    && user.paid
    && !user.blocked
    && !user.badUsername
    || user.isAdmin
  )
    ?
    "granted"
    :
    "denied"
);
