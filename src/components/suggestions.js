
import { useState } from "react";



function Car(){
    const [suggest, setSuggest] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api/suggestions/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            suggest: suggest,
         
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        alert("notice added successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

    


return(
<div class="center">
<div class="p-3 mb-2  text-white text-center col-6 border rounded mx-auto" style={{ backgroundColor: "#15172b", fontSize:'20px' }}  >Add Your Comments</div>
<form onSubmit={handleSubmit}>
  
  
  <div class="form-group col-8 mx-auto m-5" style={{height:"500px"}} onSubmit={handleSubmit}  >
    <label for="exampleFormControlTextarea1">we are ready to accept suggeations</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" onChange={(e) => setSuggest(e.target.value)}></textarea>
    <button type="submit" class="btn btn-primary">Submit</button>

  </div>
</form>
</div>
    )




}
export default Car;