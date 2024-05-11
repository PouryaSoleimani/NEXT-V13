import ImageComponent from "../components/ImageComponent";

//^ IMAGE ROUTE
export default function Page() {
  return (
    <>
      <div className="text-4xl p-8 text-center font-bold border-b-8 ">
        <h1>IMAGE ROUTE</h1>
      </div>

      <div>
      <ImageComponent  />
      </div>
    </>
  );
}