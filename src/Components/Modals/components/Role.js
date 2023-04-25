import React from "react";
import Select from "react-dropdown-select";
import propTypes from "prop-types";

const Role = ({userRole, roleChange}) =>{
    const options = [
        {label: "veterinario", value: "veterinario"},
        {label: "admin", value: "admin"},
    ];

    return(
        <React.Fragment>
            <label htmlFor="fullname"> Role </label>
            <select
                value={userRole}
                options = {options}
                placeholder="Seleccione el rol"
                required = {true}
                dropdownPosition = "top"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                onChange={roleChange}
            />
        </React.Fragment>
    );
  };

export default Role;

Role.propTypes = {
    userRole: propTypes.array.isRequired,
    roleChange: propTypes.func.isRequired,
};