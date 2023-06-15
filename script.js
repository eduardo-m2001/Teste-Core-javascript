class Age {
  constructor(dateOfBirth) {
    this.dateOfBirth = new Date(dateOfBirth);
  }

  getAge() {
    const today = new Date();
    const birthDate = this.dateOfBirth;

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }
}

// Exemplo de uso:
const dateOfBirth = "1999-07-23";
const age = new Age(dateOfBirth);
const currentAge = age.getAge();

console.log(currentAge + " anos");
