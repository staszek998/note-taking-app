import React from "react";
import PropTypes from "prop-types";

const Search = ({ submitHandler = fn => fn }) => {
  let _query, _scope;

  return (
    <form className="row justify-content-end mt-3">
      <div className="col-8 col-md-auto">
        <input
          type="text"
          className="form-control"
          name="search-term"
          id="search-term"
          placeholder={`E.g. 'Meeting with John'`}
          ref={input => (_query = input)}
        />
      </div>

      <div className="col-4 col-md-auto">
        <input
          type="submit"
          className="form-control btn btn-primary"
          value="Search"
          onClick={event => {
            event.preventDefault();
            submitHandler(_query.value, _scope.value);
          }}
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
          ref={select => (_scope = select)}
        >
          <option value="body">body</option>
          <option value="title">title</option>
          <option value="both">both</option>
        </select>
      </div>
    </form>
  );
};

Search.propTypes = {
  submitHandler: PropTypes.func
};

export default Search;
