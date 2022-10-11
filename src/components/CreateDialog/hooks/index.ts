import { ref } from "vue";

// interface stepData {
//   stepName: string;
// }

// interface PropsType {
//   stepArray: stepData[];
// }

export default function useStep() {
  const user = ref(0);
  // const stepArray = ref(array);
  function next() {
    console.log("user", user);
  }

  return {
    user,
    next
    // stepArray
  };
}
