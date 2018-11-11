import React from "react";

const Search = () => (
  <form className="row justify-content-end mt-3">
    <div className="col-8 col-md-auto">
      <input
        type="text"
        className="form-control"
        name="search-term"
        id="search-term"
        placeholder={`E.g. 'Meeting with John'`}
      />
    </div>

    <div className="col-4 col-md-auto">
      <input
        type="submit"
        className="form-control btn btn-secondary"
        value="Search"
      />
    </div>

    <div className="col-auto d-flex align-items-center mt-1 mt-md-0">
      <span>in</span>
    </div>

    <div className="col-auto mt-1 mt-md-0">
      <select
        className="form-control"
        name="search-category"
        id="search-category"
      >
        <option value="body">body</option>
        <option value="title">title</option>
        <option value="both">both</option>
      </select>
    </div>
  </form>
);

export default Search;
