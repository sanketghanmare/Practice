function findEmailDomain(email) {
    if (email.indexOf('@') === -1) return false;
    return email.replace(/.*@/, "");
}

console.log(findEmailDomain("xyz@gmail.com"))