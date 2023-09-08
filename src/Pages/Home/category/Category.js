import React from "react";

function Category() {
  return (
    <div>
      <h2 className="text-center custom-margin-top-10">
        Featured<span className="text-danger"> Categories</span>
      </h2>
      <h6 className="text-center mb-4">
        Get Your Desired Product from Featured Category!
      </h6>

      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="row">
              <div className="col-6">Pant</div>
              <div className="col-6">Shirt</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="row">
              <div className="col-6">Jacket</div>
              <div className="col-6">T-Shirt</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="row">
              <div className="col-6">Polo Shirt</div>
              <div className="col-6">Panjabi</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="row">
              <div className="col-6">Benarosi</div>
              <div className="col-6">Three Piece</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="row">
              <div className="col-6">Two Piece</div>
              <div className="col-6">One Piece</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="row">
              <div className="col-6">Lehenga</div>
              <div className="col-6">Boys Wear</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="row">
              <div className="col-6">Girls Wear</div>
              <div className="col-6">Gents Wear</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="row">
              <div className="col-6">Ladies Wear</div>
              <div className="col-6">Kids Wear</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
