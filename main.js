function Person(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  
  function Apartment() {
    this.residents = [];
  }
  
  Apartment.prototype.addResident = function(person) {
    this.residents.push(person);
  };
  
  function House(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }
  
  House.prototype.addApartment = function(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log('Maximum number of apartments reached');
    }
  };
  

  const person1 = new Person('John', 'male');
  const person2 = new Person('Jane', 'female');
  
  const apartment1 = new Apartment();
  const apartment2 = new Apartment();
  
  apartment1.addResident(person1);
  apartment2.addResident(person2);
  
  const house = new House(2);
  house.addApartment(apartment1);
  house.addApartment(apartment2);

