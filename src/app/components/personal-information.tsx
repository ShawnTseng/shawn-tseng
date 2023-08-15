import moment from "moment";

export default function PersonalInformation() {
  const age = moment().diff(moment("1992-02-15"), "years");
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <h1>Personal Info.</h1>
      <div>Name: Shawn TSENG</div>
      <div>Gender: Male</div>
      <div>Age: {age}</div>
    </div>
  );
}
