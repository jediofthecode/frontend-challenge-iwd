import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { 
  InputGroup, 
  InputGroupAddon,
  ButtonDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
} from 'reactstrap';

function Search({searchTerm, onChangeTerm, searchType, onChangeSearchType}) {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  // simple event handler for a bound input
  const handleInputChange = (e) => onChangeTerm(e.target.value);

  return (
    <InputGroup className="mb-3">
      <InputGroupAddon addonType="prepend">
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="primary" style={{textTransform: "capitalize"}}>{searchType}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => onChangeSearchType("name")}>Name</DropdownItem>
            <DropdownItem onClick={() => onChangeSearchType("code")}>Code</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </InputGroupAddon>
      <input type="text" className="form-control" placeholder="Search" value={searchTerm} onChange={handleInputChange} />
    </InputGroup>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string,
  onChangeTerm: PropTypes.func,
  searchType: PropTypes.string,
  onChangeSearchType: PropTypes.func
};

export default Search;