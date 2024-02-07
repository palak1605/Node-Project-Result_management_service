const login = (reqbody) => {
  const teacherCredentials = {
    username: "palak",
    password: "palak123",
  };
  if (
    reqbody?.body?.username === teacherCredentials.username &&
    reqbody?.body?.password === teacherCredentials.password
  ) {
    console.log("Teacher login successful!");
    return true;
  } else {
    console.log("Teacher not login successful!");
    return false;
  }
};
module.exports = login;
