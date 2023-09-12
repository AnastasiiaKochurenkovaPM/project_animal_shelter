const nameEdit = "name-edit";
const cityEdit = "city-edit";
const emailEdit = "email-edit";
const phonenumberEdit = "phonenumber-edit";

let initialState = {
  name: "",
  city: "",
  email: "",
  phonenumber: "",
};

const cabinetReducer = (state = initialState, action) => {
  switch (action.type) {
    case nameEdit:
      return {
        ...state,
        name: action.newText,
      };
    case cityEdit:
      return {
        ...state,
        city: action.newText,
      };
    case emailEdit:
      return {
        ...state,
        email: action.newText,
      };
    case phonenumberEdit:
      return {
        ...state,
        phonenumber: action.newText,
      };
    default:
      return state;
  }
};

export let nameChangeAC = (text) => ({
  type: nameEdit,
  newText: text,
});
export let cityChangeAC = (text) => ({
  type: cityEdit,
  newText: text,
});
export let emailChangeAC = (text) => ({
  type: emailEdit,
  newText: text,
});
export let phonenumberChangeAC = (text) => ({
  type: phonenumberEdit,
  newText: text,
});

export default cabinetReducer;
