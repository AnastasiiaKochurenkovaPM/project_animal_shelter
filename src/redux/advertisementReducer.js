let initialState = {
  name: "Мурка",
  type: "Кіт",
  sex: "Самка",
  age: "1 рік",
  sterilization: true,
  vaccination: true,
  shelterName: "Animals free",
  city: "Львів",
};

const advertisementReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default advertisementReducer;
