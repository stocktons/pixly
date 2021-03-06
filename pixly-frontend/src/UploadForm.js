import React, { useState } from "react";

/** Image Upload Form 
 * 
 * props:
 * -upload
 * 
 * state:
 * - formData
 * 
 * App -> UploadForm
*/

function UploadForm({ upload }) {
  const [formData, setFormData] = useState({ file: null }); 

  function handleChangeFile(evt) {
    setFormData({ ...formData, file: evt.target.files[0]});
  }
  function handleChange(evt) {
    const { name, value } = evt.target
    setFormData(data => ({
      ...formData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const data = new FormData();
    for(let key in formData) {
      data.append(key, formData[key]);
    }
    upload(data);
    setFormData({ file: null });
  }

  return (
    <form encType="multipart/form-data"
          action=""
          onSubmit={handleSubmit}
          className="UploadForm container">
      <div className="form-group">
        <label htmlFor="name">Name of Image</label>
        <input name="name"
               id="name"
               onChange={handleChange}
               className="form-control"/>
        <label htmlFor="category">Category</label>
        <input name="category"
               id="category"
               onChange={handleChange}
               className="form-control"/>
        <label htmlFor="uploadedBy">Uploaded By</label>
        <input name="uploadedBy"
               id="uploadedBy"
               onChange={handleChange}
               className="form-control"/>
               
        <label htmlFor="file">Upload an image file</label>
        <input type="file" 
               name="file" 
               id="file"
               className="form-control"
               onChange={handleChangeFile} />
        <button type="submit" className="btn btn-primary mt-3">Upload!</button>
      </div>
    </form>
  );
}
// end

export default UploadForm;